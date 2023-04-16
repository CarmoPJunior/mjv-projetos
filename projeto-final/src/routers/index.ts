import { Router } from 'express';
import healthRouter from './health.router';
import authRouter from './auth.router';
import userRouter from './user.router';
import categoriaRouter from './categoria.router';
import faturaRouter from './fatura.router';
import { authorizationMiddleware } from '../middlewares/authorization.middleware';

const router = Router();

router.use('/health', healthRouter);
router.use('/auth', authRouter);
router.use('/user', authorizationMiddleware,  userRouter);
router.use('/categoria', categoriaRouter);
router.use('/fatura', authorizationMiddleware, faturaRouter);

export default router;
