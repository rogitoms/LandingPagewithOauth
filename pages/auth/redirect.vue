<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-[Open_Sans]">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-black text-3xl">
      <div v-if="error" class="flex items-center justify-center text-black">
        <p class="text-center mt-4">
          {{ error }} Back to
          <NuxtLink to="/" class="text-purple-700 hover:underline">Home Page</NuxtLink>
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
import { useAuthStore } from '~/stores/auth';
import { useRoute, useRouter } from 'vue-router';
import { $fetch } from 'ofetch';

const loading = ref(true);
const error = ref(null);
const route = useRoute();
const router = useRouter();

const mounted = async () => {
  console.log('Route query:', route.query);

  const params = new URLSearchParams(route.query);
  const code = params.get('code');
  const state = params.get('state');

  if (!state) {
    error.value = 'Invalid request: Missing state parameter.';
    loading.value = false;
    return;
  }

  if (!code) {
    error.value = 'Missing authorization code.';
    loading.value = false;
    return;
  }

  try {
    const response = await $fetch('/api/auth/exchange-code', {
      method: 'GET',
      params: { code, state },
      credentials: 'include',
    });

    const { accessToken } = response;

    if (!accessToken) {
      error.value = 'Authentication failed. No access token returned.';
      loading.value = false;
      return;
    }

    const authStore = useAuthStore();
    authStore.setAccessToken(accessToken); // Store token in Pinia

    console.log('Authentication successful:', accessToken);

    // Redirect to dashboard (middleware will allow access)
    router.push('/dashboard');
  } catch (err) {
    console.error('Error during OAuth exchange:', err.response?.data || err.message);
    error.value = 'Authentication failed. Please try again.';
  } finally {
    loading.value = false;
  }
};

mounted();
</script>
