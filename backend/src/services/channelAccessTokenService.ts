import { ChannelAccessTokenRequest, ChannelAccessTokenResponse } from '../types';
import axios from 'axios';

export class ChannelAccessTokenService {
    private readonly channelId: string;
    private readonly channelSecret: string;

    constructor(channelId: string, channelSecret: string) {
        this.channelId = channelId;
        this.channelSecret = channelSecret;
    }

    public async getShortLivedToken(request: ChannelAccessTokenRequest): Promise<ChannelAccessTokenResponse> {
        // Logic to generate a short-lived access token
        const response = await axios.post('https://api.line.me/v2/oauth/accessToken', {
            grant_type: 'client_credentials',
            client_id: this.channelId,
            client_secret: this.channelSecret,
        });
        return response.data;
    }

    public async getLongLivedToken(request: ChannelAccessTokenRequest): Promise<ChannelAccessTokenResponse> {
        // Logic to generate a long-lived access token
        const response = await axios.post('https://api.line.me/v2/oauth/accessToken', {
            grant_type: 'refresh_token',
            refresh_token: request.refreshToken,
            client_id: this.channelId,
            client_secret: this.channelSecret,
        });
        return response.data;
    }

    public async getClientCredentialsToken(): Promise<ChannelAccessTokenResponse> {
        // Logic to generate a client credentials access token
        const response = await axios.post('https://api.line.me/v2/oauth/accessToken', {
            grant_type: 'client_credentials',
            client_id: this.channelId,
            client_secret: this.channelSecret,
        });
        return response.data;
    }

    public async getAuthorizationCodeToken(request: ChannelAccessTokenRequest): Promise<ChannelAccessTokenResponse> {
        // Logic to generate an authorization code access token
        const response = await axios.post('https://api.line.me/v2/oauth/accessToken', {
            grant_type: 'authorization_code',
            code: request.code,
            redirect_uri: request.redirectUri,
            client_id: this.channelId,
            client_secret: this.channelSecret,
        });
        return response.data;
    }
}