export interface ChannelAccessTokenRequest {
    grant_type: 'client_credentials' | 'authorization_code' | 'refresh_token' | 'password';
    client_id: string;
    client_secret: string;
    redirect_uri?: string;
    code?: string;
    refresh_token?: string;
    username?: string;
    password?: string;
}

export interface ChannelAccessTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
}