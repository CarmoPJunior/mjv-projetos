import express, { Request, Response } from 'express';
import AuthService from '../services/auth.service';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { login, password } = req.body;

    if (!login || !password) {
      return res.status(400).json({ message: 'Informe o login e senha para autenticar!' });
    }

    const token = await AuthService.autorizacao(login, password);

    return res.status(200).json({ token: token });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

export default router;
