import { Request, Response } from 'express';
import { ChannelAccessTokenService } from '../services/channelAccessTokenService';

export class ChannelAccessTokenController {
    private service: ChannelAccessTokenService;

    constructor() {
        this.service = new ChannelAccessTokenService();
    }

    public async getShortLivedToken(req: Request, res: Response): Promise<void> {
        try {
            const token = await this.service.generateShortLivedToken();
            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getLongLivedToken(req: Request, res: Response): Promise<void> {
        try {
            const token = await this.service.generateLongLivedToken();
            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getChannelAccessToken(req: Request, res: Response): Promise<void> {
        try {
            const token = await this.service.generateChannelAccessToken();
            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getRefreshToken(req: Request, res: Response): Promise<void> {
        try {
            const token = await this.service.generateRefreshToken();
            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}