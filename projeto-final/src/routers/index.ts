import { Router } from 'express';
import healthRouter from './health.router';
import authRouter from './auth.router';
import userRouter from './user.router';
import categoriaRouter from './categoria.router';
import faturaRouter from './fatura.router';
import swaggerRoutes from './swagger.router';
import { authorizationMiddleware } from '../middlewares/authorization.middleware';

const configSwagger =async () =>  {
  const swagger = await swaggerRoutes.load();
  router.use('/doc', swagger);
}



const router = Router();

configSwagger();

router.use('/health', healthRouter);
router.use('/auth', authRouter);
router.use('/user', authorizationMiddleware,  userRouter);
router.use('/categoria', categoriaRouter);
router.use('/fatura', authorizationMiddleware, faturaRouter);

export default router;
