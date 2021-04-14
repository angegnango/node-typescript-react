import {Router} from 'express';
import sensorsController from '../controllers/sensorsController';
const router = Router();

router.get('/sensors', sensorsController);

export default router;