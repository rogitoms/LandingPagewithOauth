# Landing Page with OAuth Authentication

## Overview
This project is a **Landing Page with OAuth Authentication**, built using Nuxt.js and an OAuth2 provider for secure user authentication.

## Features
- Secure user authentication with **OAuth2**
- Simple landing page with login functionality
- Access Token Retrieval & Storage
- User Information Fetching
- Session Management
- Secure Logout Functionality
- Middleware for Protected Routes
- Error Handling for Authentication Failures

## Prerequisites
Before running the project, ensure you have:
- An **OAuth Provider** (e.g., Google, GitHub, Auth0) with API credentials.
- A **Client ID** and **Client Secret** from the provider.
- A registered **redirect URI** (e.g., `http://localhost:3000/auth/redirect`).

## Getting Started
### 1. Clone the Repository
```sh
git clone https://github.com/rogitoms/LandingPagewithOauth.git
```

### 2. Install Dependencies
Ensure you have all necessary dependencies installed:
```sh
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the project root with the following content:
```env
OAUTH_CLIENT_ID=your-client-id
OAUTH_CLIENT_SECRET=your-client-secret
OAUTH_AUTHORIZATION_URL=provider-auth-url
OAUTH_TOKEN_URL=provider-token-url
OAUTH_USER_INFO_URL=provider-user-info-url
OAUTH_REDIRECT_URI=http://localhost:3000/auth/redirect
```

### 4. Run the Application
To start the Nuxt.js application, run:
```sh
npm run dev
```
Your app should now allow users to log in with the OAuth provider.

### 5. Access the Application
Open your browser and visit:
```
http://localhost:3000
```

## Authentication Workflow
1. User clicks **Sign in** on the landing page.
2. User is redirected to the **OAuth provider** for authentication.
3. After login, the user is redirected back to `/auth/redirect`.
4. The app retrieves the **access token** and fetches user info.
5. User session is stored securely.

## Endpoints
| Endpoint | Description |
|----------|-------------|
| `/` | Landing page |
| `/auth/redirect` | Handles OAuth provider response |
| `/dashboard` | User dashboard (protected) |

## Dependencies
Ensure you have installed:
```sh
npm install @nuxtjs/axios dotenv
```

## Conclusion
This project provides a secure and scalable **Landing Page with OAuth Authentication** using Nuxt.js. Follow the instructions carefully to set up and deploy the application efficiently.


