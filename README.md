# Line Channel Access Token Starter Project

This project is a starter template for implementing the LINE Channel Access Token functionality using TypeScript, Node.js, and React with Vite. It includes both backend and frontend components to manage and display information about the different types of channel access tokens.

## Project Structure

```
line-channel-access-token-starter
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   ├── channelAccessTokenController.ts
│   │   ├── services
│   │   │   ├── channelAccessTokenService.ts
│   │   ├── routes
│   │   │   └── index.ts
│   │   ├── types
│   │   │   └── index.ts
│   │   └── app.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── ChannelAccessTokenTypes.tsx
│   │   ├── pages
│   │   │   └── Home.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── README.md
├── .gitignore
└── README.md
```

## Backend

The backend is built using Node.js and Express. It handles the logic for generating and managing channel access tokens. The backend structure includes:

- **Controllers**: Contains the logic for handling requests related to channel access tokens.
- **Services**: Contains business logic for generating and managing tokens.
- **Routes**: Defines the API endpoints for the application.
- **Types**: Defines TypeScript interfaces for request and response structures.

### Getting Started

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the backend server:
   ```
   npm run start
   ```

## Frontend

The frontend is built using React and Vite. It provides a user interface for interacting with the channel access tokens. The frontend structure includes:

- **Components**: Contains reusable components for displaying information.
- **Pages**: Contains the main pages of the application.
- **App**: The main application component that sets up routing.

### Getting Started

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the frontend development server:
   ```
   npm run dev
   ```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

This project is inspired by the LINE Messaging API documentation and aims to provide a clear implementation of channel access tokens.