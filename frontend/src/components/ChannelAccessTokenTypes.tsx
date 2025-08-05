import React from 'react';

const ChannelAccessTokenTypes: React.FC = () => {
    const tokenTypes = [
        {
            type: 'Short-lived',
            description: 'This type of token is valid for a short period and is typically used for temporary access.'
        },
        {
            type: 'Long-lived',
            description: 'This token remains valid for a longer duration and is used for persistent access.'
        },
        {
            type: 'Refresh',
            description: 'Refresh tokens are used to obtain new access tokens without requiring user interaction.'
        },
        {
            type: 'Permanent',
            description: 'Permanent tokens do not expire and are used for long-term access without renewal.'
        }
    ];

    return (
        <div>
            <h2>Channel Access Token Types</h2>
            <ul>
                {tokenTypes.map((token, index) => (
                    <li key={index}>
                        <strong>{token.type}:</strong> {token.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChannelAccessTokenTypes;