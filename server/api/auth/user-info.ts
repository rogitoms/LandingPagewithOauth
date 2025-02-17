import { defineEventHandler, getCookie, createError } from "h3";
import { $fetch } from "ofetch";
import dotenv from "dotenv";

//getCookie- retrieve access token from cookies

dotenv.config();

export default defineEventHandler(async (event) => {
  console.log("Processing request to fetch user information...");

  // Retrieve the access token from cookies
  const accessToken = getCookie(event, "accessToken");
  if (!accessToken) {
    console.warn("Access token is missing. User not authenticated.");
    throw createError({
      statusCode: 401,
      statusMessage: "User not authenticated",
    });
  }
  console.log("Access token retrieved successfully.");

  // Ensure the USER_INFO_URL is defined
  const USER_INFO_URL = process.env.OAUTH_USER_INFO_URL;
  if (!USER_INFO_URL) {
    console.error("OAUTH_USER_INFO_URL is not defined in environment variables.");
    throw createError({
      statusCode: 500,
      statusMessage: "Missing OAUTH_USER_INFO_URL in environment variables",
    });
  }
  console.log("USER_INFO_URL is defined. Proceeding to fetch user information...");

  try {
    // Fetch user information from the external service
    const userInfo = await $fetch(USER_INFO_URL, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    // Log the entire user information object to the server-side terminal
    console.log("User information fetched successfully:", userInfo);

    return { user: userInfo };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching user information:", {
        message: error.message,
        response: (error as any).response?.data, // Safely access 'response' when 'error' is of type 'any'
      });
    } else {
      console.error("Unknown error occurred while fetching user information.");
    }

    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch user info",
    });
  }
});
