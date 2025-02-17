import { defineEventHandler, setCookie, createError } from "h3";

export default defineEventHandler(async (event) => {
  try {
    // Remove the 'accessToken' cookie by setting it with an expired date
    setCookie(event, 'accessToken', '', { maxAge: 0, path: '/' });

    // Optionally, clear other sensitive cookies here if needed, for example:
    // setCookie(event, 'refreshToken', '', { maxAge: 0, path: '/' });

    console.log("User logged out successfully.");

    // Return a success message
    return { message: 'User logged out successfully' };
  } catch (error) {
    console.error("Error logging out:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to log out",
    });
  }
});
