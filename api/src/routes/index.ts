import {Router} from 'express';
import webhook from './webhook';
import sensors from './sensors';
const router = Router();

router.use('/api', webhook);
router.use('/api', sensors);

export default router;