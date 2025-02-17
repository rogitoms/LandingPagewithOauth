import { defineStore } from 'pinia';//pini store
import { ref } from 'vue';
import { useCookie } from '#app';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);//store user data
  const accessToken = useCookie('accessToken'); // Use cookies instead of localStorage to store accesstoken

  //update user data
  function setUser(userData) {
    user.value = userData;
  }

  //store access token
  function setAccessToken(newToken) {
    if (!newToken) {//check if token is valid
      console.error("Attempted to store an empty access token!");
      return;
    }
    accessToken.value = newToken; // Store token in the cookie
    console.log("Token Stored:", newToken);
  }

  //clear user data
  function logout() {
    user.value = null;
    accessToken.value = null;
    accessToken.delete(); // Remove token from cookie no session remains
    console.log("Logged out. Token removed.");
  }

  return { user, accessToken, setUser, setAccessToken, logout };
}, {
  persist: true // store state to persist across reloads
});
