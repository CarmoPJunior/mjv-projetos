import { Router } from 'express';
import healthRouter from './health.router';
import categoriaRouter from './categoria.router';
import faturaRouter from './fatura.router';

const router = Router();

router.use('/health', healthRouter);
router.use('/categoria', categoriaRouter);
router.use('/fatura', faturaRouter);

export default router;
