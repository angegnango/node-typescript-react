import {Router} from 'express';
import occupancyController from '../controllers/occupancyController';

const router = Router();

router.get('/occupancy', occupancyController);

export default router;