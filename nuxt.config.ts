import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  //oauth
  runtimeConfig :{
    public: {
      client_id: process.env.CLIENT_ID,
      redirect_uri: process.env.REDIRECT_URI,
      authorizationUrl:process.env.OAUTH_AUTHORIZATION_URL,
      tokenUrl:process.env.OAUTH_TOKEN_URL,
      userinfo:process.env.OAUTH_USER_INFO_URL
    },
    clientSecret: process.env.CLIENT_SECRET
  },
  // CSS Configuration
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt'],
  // Vite Plugins Configuration
  vite: {
    plugins: [tailwindcss()],
  },

  });
