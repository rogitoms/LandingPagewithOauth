import { defineEventHandler } from "h3";
import dotenv from "dotenv";

dotenv.config();

export default defineEventHandler(() => {
  const CLIENT_ID = process.env.CLIENT_ID;
  const REDIRECT_URI = process.env.REDIRECT_URI;
  const OAUTH_AUTHORIZATION_URL = process.env.OAUTH_AUTHORIZATION_URL;
  const STATE=encodeURIComponent('dashboard');

  const authUrl = `${OAUTH_AUTHORIZATION_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=openid&state=${STATE}`;

  return { authUrl };
});
