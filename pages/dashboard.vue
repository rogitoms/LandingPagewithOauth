
<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Main Content -->
    <div class="p-6">
      <div v-if="user">
        <!-- Dashboard Header -->
        <header class="flex justify-between items-center p-6 bg-gray-800 shadow-md">
          <h1 class="text-3xl font-bold">Dashboard</h1>
          <button 
            @click="logout"
            class="bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all">
            Log Out
          </button>
        </header>
        <!-- Welcome Back Card -->
        <div class="relative bg-gradient-to-r from-blue-900 to-blue-700 p-6 rounded-xl shadow-lg overflow-hidden">
          <div class="relative z-10">
            <h3 class="text-white text-xl font-semibold">Welcome back,</h3>
            <h2 class="text-white text-2xl font-bold">{{ user.first_name }}</h2>
            <p class="text-gray-300 mt-2">Glad to see you again!</p>

          </div>
        </div>

        <!-- User Info -->
        <div class="mt-6 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold">User Information</h2>
          <p>Email: {{ user.email }}</p>
        </div>

      </div>
      <!--loading symbol-->
      <div v-else-if="loading" class="flex justify-center min-h-[10vh]">
        <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-900 border-solid"></div>
      </div>

      <!-- Error/Redirect UI -->
      <div v-else="error" class="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-[Open_Sans]">
        <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-black text-3xl">
          <div class="flex items-center justify-center text-black">
            <p class="text-center mt-4">
              {{error}}<br>Back to  
              <NuxtLink to="/" class="text-purple-700 hover:underline">
                Home Page
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useAuthStore } from '~/stores/auth'; // Import the Pinia store
import { $fetch } from 'ofetch'; // Use $fetch for making API requests
import { useRouter } from 'vue-router';

definePageMeta({
  middleware: 'auth' // Protects this route with the `auth.js` middleware
});

const user = ref(null);
const error = ref(null);
const router = useRouter();

const authStore = useAuthStore();


// If user is already available in the store, use it directly

const loading = ref(true);

onMounted(async () => {
  try {
    // If user is not in store, fetch from backend
    const response = await $fetch('/api/auth/user-info', {
      method: 'GET',
      credentials: 'include', // Ensure cookies are sent for session
    });

    user.value = response.user; // Assuming the response contains the user object
    authStore.setUser(user.value); // Optionally store the user data in the store

    console.log('User Info:', user.value);
  } catch (err) {
    console.error('Error fetching user info:', err.response?.data || err.message);
    if (err.response?.status === 401) {
      error.value = 'Unauthorized access. Please log in.';
      //router.replace('/');
    } else {
      error.value = 'An error occurred. Please try again.';
    }
  } finally {
    loading.value = false;
  }
});


// Logout function
const logout = async () => {
  try {
    // Call the logout endpoint
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
    });

    // Check for success response
    if (response.ok) {
      // Clear the user data from store
      authStore.setUser(null);

      // Redirect to the homepage after successful logout
      // Prevent returning to the dashboard by replacing the history state
      router.replace('/');} else {
      console.error('Logout failed');
    }
  } catch (error) {
    console.error('Error logging out:', error);
  }
};

</script>


