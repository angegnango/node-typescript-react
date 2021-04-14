import {Router} from 'express';
import webhook from './webhook';
const router = Router();

router.use('/api', webhook);

export default router;