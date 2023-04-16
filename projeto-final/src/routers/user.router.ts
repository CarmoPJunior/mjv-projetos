import { Request, Response, Router } from 'express';
import UserService from '../services/user.service';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAll();
    res.status(200).send({ Usuarios: users });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const user = await UserService.getById(req.params.id);
    res.send({ Usuario: user });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { login, password } = req.body;

    if (!login || !password) {
      return res.status(400).json({ message: 'Informe o login e senha!' });
    }

    await UserService.create(req.body);
    res.status(201).send({ message: 'Usuário adicionado com sucesso!' });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const { login, password } = req.body;

    if (!login || !password) {
      return res.status(400).json({ message: 'Informe o login e senha!' });
    }

    await UserService.update(id, req.body);
    res.status(200).send({ message: 'Usuário atualizado com sucesso!' });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await UserService.delete(req.params.id);
    res.status(200).send({ message: 'Usuário deletado com sucesso!' });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

export default router;
