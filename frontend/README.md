# Frontend README.md

# Line Channel Access Token Starter

This project is a starter template for implementing the LINE Channel Access Token functionality using TypeScript, Node.js, and React with Vite. It demonstrates how to manage and utilize different types of channel access tokens as specified in the LINE documentation.

## Project Structure

The project is divided into two main parts: the backend and the frontend.

### Backend

The backend is built with Node.js and Express. It handles the logic for generating and managing channel access tokens. The structure is as follows:

- `src/app.ts`: Entry point for the backend application.
- `src/controllers/channelAccessTokenController.ts`: Contains methods for handling requests related to channel access tokens.
- `src/services/channelAccessTokenService.ts`: Implements business logic for generating and managing channel access tokens.
- `src/routes/index.ts`: Sets up the routes for the backend application.
- `src/types/index.ts`: Defines the structure of the data used in the application.

### Frontend

The frontend is built with React and Vite. It provides a user interface for interacting with the backend and displaying information about channel access tokens. The structure is as follows:

- `src/App.tsx`: Main component that sets up routing and renders the application layout.
- `src/components/ChannelAccessTokenTypes.tsx`: Displays information about the different types of channel access tokens.
- `src/pages/Home.tsx`: Serves as the home page of the application.
- `src/main.tsx`: Entry point for the React application.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd line-channel-access-token-starter
   ```

2. Install dependencies for the backend:
   ```
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```
   cd frontend
   npm install
   ```

4. Start the backend server:
   ```
   cd backend
   npm start
   ```

5. Start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

## Channel Access Token Types

This project implements the following types of channel access tokens as per the LINE documentation:

1. **Long-lived Channel Access Token**: Used for long-term access to the LINE API.
2. **Short-lived Channel Access Token**: Used for temporary access, typically valid for a short duration.
3. **Refresh Token**: Used to obtain a new access token without requiring user re-authentication.
4. **Client Credentials Grant**: Used for server-to-server communication without user interaction.

## Best Practices

- Follow the coding standards and best practices for TypeScript and React.
- Keep components small and focused on a single responsibility.
- Use TypeScript interfaces to define the shape of data throughout the application.
- Ensure proper error handling and validation in both backend and frontend.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.