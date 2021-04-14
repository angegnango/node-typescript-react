import {Router} from 'express';
import webhookController from '../controllers/webhookController';
const router = Router();

router.post('/webhook', webhookController);

export default router;