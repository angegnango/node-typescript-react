import {Router} from 'express';
import webhook from './webhook';
import sensors from './sensors';
import occupancy from './occupancy';

const router = Router();

router.use('/api', webhook);
router.use('/api', sensors);
router.use('/api', occupancy);

export default router;