# Backend Channel Access Token Starter Project

This is the backend part of the Channel Access Token Starter Project, which implements the four types of channel access tokens as specified in the LINE documentation. The backend is built using TypeScript and Node.js with Express.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **controllers/**: Contains the controller classes for handling requests.
    - `channelAccessTokenController.ts`: Handles requests related to channel access tokens.
  - **services/**: Contains the service classes for business logic.
    - `channelAccessTokenService.ts`: Implements methods for generating and managing channel access tokens.
  - **routes/**: Contains the route definitions for the application.
    - `index.ts`: Sets up the routes for the backend application.
  - **types/**: Contains TypeScript interfaces for data structures.
    - `index.ts`: Defines the structure of requests and responses.
  - `app.ts`: The entry point of the backend application.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd line-channel-access-token-starter/backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```

## API Endpoints

The backend exposes the following endpoints for managing channel access tokens:

- `POST /api/tokens/short-lived`: Generates a short-lived channel access token.
- `POST /api/tokens/long-lived`: Generates a long-lived channel access token.
- `POST /api/tokens/refresh`: Refreshes a channel access token.
- `POST /api/tokens/revoke`: Revokes a channel access token.

## Best Practices

- Follow the MVC architecture for organizing code.
- Use TypeScript for type safety and better development experience.
- Implement error handling and validation for API requests.
- Write unit tests for critical components and services.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.