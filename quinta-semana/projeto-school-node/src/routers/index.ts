import { Router } from 'express';
import healthRouter from './health.router';
import productRouter from './product.router';

const router = Router();

router.use('/health', healthRouter);
router.use('/product', productRouter);

export default router;
