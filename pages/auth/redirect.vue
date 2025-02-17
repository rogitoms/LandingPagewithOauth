<template>
  <div class ="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-[Open_Sans] ">
    <div class ="w-full max-w-md bg-white rounded-2xl shodow-lg p-8 text-black text-3xl">
      <!--<h1 class="text-4xl font-semibold my-8 text-center">Redirecting...</h1>-->
    <div v-if="error" class="flex items-center justify-center text-black">
      <p class="text-center mt-4 ">
        {{error}} Back to  
        <NuxtLink to="/" class="text-purple-700 hover:underline">
          Home Page
        </NuxtLink>
      </p>
    </div>
    <div v-else="loading" class="flex justify-center min-h-[50vh]">
      <p class="text-center mb-4">Redirecting, please wait...</p>
        <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-500 border-solid"></div>
      </div>
      </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'; // Import store-authentication state
import { useRoute, useRouter } from 'vue-router'; // routing and navigation
import { $fetch } from 'ofetch'; // For making API requests

const loading = ref(true);//authentication process ongoing
const error = ref(null);//auth errors
const redirectTo = ref(null);//store url redirected to after auth

const route = useRoute();
const router = useRouter(); //allow nav to diff routes

const mounted = async () => {
  console.log('Route path:', route.path); // Logs the current path
  console.log('Route query:', route.query); // Logs the query parameters


  const params = new URLSearchParams(route.query);
  const code = params.get('code');
  const state = params.get('state'); // Retrieve the state parameter

  // Ensure that state is provided and valid
  if (!state) {
    error.value = 'Invalid request: Missing state parameter.';
    loading.value = false;
    return;
  }

    redirectTo.value = state ? `/${state}` : '/dashboard'; // Ensure state is prefixed properly

  // Debugging: Log state and redirectTo value
  console.log('State parameter:', state); // Should print 'dashboard'
  console.log('Redirecting to:', redirectTo.value); // Should print '/dashboard' or '/<state>'

  if (!code) {
    error.value = 'Missing authorization code.';
    loading.value = false;
    return;
  }

  try {
    // Call backend API to exchange the code for an access token
    const response = await $fetch('/api/auth/exchange-code', {
      method: 'GET', // Assuming GET as per your endpoint setup
      params: { code, state }, // Pass the code and state as query parameters
      credentials: 'include', // Ensure cookies are sent (if using cookies for session)
    });

    const { accessToken, message } = response; // Get access token from the response

    if (!accessToken) {
      error.value = 'Authentication failed. No access token returned.';
      loading.value = false;
      return;
  }

    // Store the token using Pinia store
    const authStore = useAuthStore();
    authStore.setAccessToken(accessToken); // Store the token in your Pinia store

  // Check if the user is authenticated
  

    console.log('Authentication successful:', { accessToken, message });

    // Redirect to the page stored in the 'state' parameter or default to '/dashboard'
    router.push(redirectTo.value);
  } catch (err) {
    console.error('Error during OAuth exchange:', err.response?.data || err.message);
    error.value = 'Authentication failed. Please try again.';
  } finally {
    loading.value = false;
  }
};

mounted();
</script>
