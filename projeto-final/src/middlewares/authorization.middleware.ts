import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
dotenv.config();

const secretJWT : string = process.env.JWT_SECRET_KEY as string || '';

interface AuthPayload {
  userId: string;
}

export function authorizationMiddleware(req: Request, res: Response, next: NextFunction) {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).send({ message: 'Acesso negado!' });
  }

  try {
    const tokenSplited = authorizationHeader.split('Bearer ');

    const decoded = jwt.verify(tokenSplited[1], secretJWT) as AuthPayload;;
    req.userId = decoded.userId;

    if (!decoded) return res.status(401).send({ message: 'Acesso negado!' });

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Token de autenticação inválido!' });
  }
}
