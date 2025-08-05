import { Router } from 'express';
import ChannelAccessTokenController from '../controllers/channelAccessTokenController';

const router = Router();
const channelAccessTokenController = new ChannelAccessTokenController();

export const setRoutes = () => {
    router.post('/channel-access-token/type1', channelAccessTokenController.handleType1);
    router.post('/channel-access-token/type2', channelAccessTokenController.handleType2);
    router.post('/channel-access-token/type3', channelAccessTokenController.handleType3);
    router.post('/channel-access-token/type4', channelAccessTokenController.handleType4);

    return router;
};