import React from 'react';
import ChannelAccessTokenTypes from '../components/ChannelAccessTokenTypes';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Channel Access Tokens Overview</h1>
            <p>
                Welcome to the Channel Access Tokens starter project. This application demonstrates how to manage and utilize different types of channel access tokens as specified by the LINE documentation.
            </p>
            <ChannelAccessTokenTypes />
        </div>
    );
};

export default Home;