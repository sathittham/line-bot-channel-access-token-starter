# Line Channel Access Token Starter Project

This project is a starter template for implementing the LINE Channel Access Token functionality using TypeScript, Node.js, and React with Vite. It includes both backend and frontend components to manage and display information about the different types of channel access tokens.

## Channel Access Token Types

LINE Platform provides four different types of channel access tokens, each designed for specific use cases and security requirements:

### 1. Channel Access Token v2.1 (User-Specified Expiration)
- **Validity Period**: Up to 30 days (customizable)
- **Limit**: 30 tokens per channel
- **Security**: Enhanced with JSON Web Token (JWT)
- **Use Case**: Production applications requiring custom expiration periods
- **Benefits**: Flexible expiration, enhanced security with JWT

### 2. Stateless Channel Access Token
- **Validity Period**: 15 minutes
- **Limit**: Unlimited
- **Revocation**: Cannot be revoked once issued
- **Use Case**: Short-term operations, serverless functions, microservices
- **Benefits**: No storage requirements, unlimited issuance

### 3. Short-lived Channel Access Token
- **Validity Period**: 30 days (fixed)
- **Limit**: 30 tokens per channel
- **Revocation**: Can be revoked
- **Use Case**: Standard applications with moderate security requirements
- **Benefits**: Balance between security and convenience

### 4. Long-lived Channel Access Token
- **Validity Period**: Indefinite (no expiration)
- **Limit**: 1 token per channel
- **Availability**: Messaging API channels only
- **Use Case**: Simple applications, testing, development
- **Benefits**: No expiration management required

### Token Selection Guidelines

| Use Case | Recommended Token Type | Reason |
|----------|----------------------|---------|
| Production web application | Channel Access Token v2.1 | Custom expiration, JWT security |
| Serverless/Lambda functions | Stateless | Short-lived, no storage needed |
| Mobile applications | Short-lived | Good balance of security and usability |
| Development/Testing | Long-lived | Simple setup, no expiration management |
| High-security applications | Channel Access Token v2.1 | JWT-based, customizable validity |

### Important Security Notes
- **Reuse tokens**: The same token can be used multiple times within its validity period
- **Don't over-issue**: Avoid issuing new tokens for each API call (except stateless)
- **Revoke compromised tokens**: Immediately revoke any suspected compromised tokens
- **Monitor expiration**: Set up automatic renewal before tokens expire

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