export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore(); // Import your Pinia auth store
  
    // If user is NOT authenticated, redirect them to home page
    if (!authStore.accessToken) {
      return navigateTo('/'); // Redirect to home page
    }
  });
  