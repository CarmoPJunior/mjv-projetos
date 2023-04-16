import { Request, Response, Router } from 'express';
import CategoriaService from '../services/categoria.service';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const categorias = await CategoriaService.getAll();
    res.status(200).send({ Categorias: categorias });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const categoria = await CategoriaService.getById(req.params.id);
    res.send({ Categoria: categoria });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.get('/porNome/:nome', async (req: Request, res: Response) => {
  try {
    const categoria = await CategoriaService.getByName(req.params.nome);
    res.send({ Categoria: categoria });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    await CategoriaService.create(req.body);
    res.status(201).send({ message: 'Categoria adicionada com sucesso!' });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    await CategoriaService.update(id, req.body);
    res.status(200).send({ message: 'Categoria atualizada com sucesso!' });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await CategoriaService.delete(req.params.id);
    res.status(200).send({ message: 'Categoria deletada com sucesso!' });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

export default router;
