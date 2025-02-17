import { defineEventHandler, getQuery, createError, setCookie } from "h3";
import dotenv from "dotenv";
import { $fetch } from "ofetch";//make api requests

dotenv.config();
//extract and validate oauth code from frontend
export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);

  if (!code || typeof code !== "string") {
    throw createError({ statusCode: 400, statusMessage: "Invalid request: Missing or invalid code" });
  }

  //exchange the code 4 an accsess token
  try {
    const tokenResponse = await $fetch(process.env.OAUTH_TOKEN_URL as string, {
      method: "POST",
      body: new URLSearchParams({
        code: String(code),
        client_id: process.env.CLIENT_ID ?? "",
        client_secret: process.env.CLIENT_SECRET ?? "",
        redirect_uri: process.env.REDIRECT_URI ?? "",
        grant_type: "authorization_code",
      }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    //extract access token
    const { access_token: accessToken } = tokenResponse as { access_token: string };
    //no token returned
    if (!accessToken) {
      throw createError({ statusCode: 500, statusMessage: "Authentication failed: No access token received" });
    }

    //store access token in secure cookie
    setCookie(event, "accessToken", accessToken, { 
      httpOnly: true, 
      path: "/", 
      secure: process.env.NODE_ENV === "production" 
    });

    return { accessToken, message: "Authentication successful" };

    //handle errors
  } catch (error) {
    console.error("OAuth Error:", error);
    throw createError({ statusCode: 500, statusMessage: "Authentication failed" });
  }
});
