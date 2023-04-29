import { Request, Response, Router } from 'express';
import FaturaService from '../services/fatura.service';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  console.log(  req.userId);

  try {
    const faturas = await FaturaService.getAll();
    res.status(200).send({ Faturas: faturas });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const fatura = await FaturaService.getById(req.params.id);
    res.send({ Fatura: fatura });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.get('/por-status/:status', async (req: Request, res: Response) => {
  try {
    const fatura = await FaturaService.getAllByStatus(req.params.status);
    res.send({ Fatura: fatura });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    await FaturaService.create(req.body);
    res.status(201).send({ message: 'Fatura adicionada com sucesso!' });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    await FaturaService.update(id, req.body);
    res.status(200).send({ message: 'Fatura atualizada com sucesso!' });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.put('/baixar/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    await FaturaService.baixarFatura(id, req.body);
    res.status(200).send({ message: 'Fatura baixada com sucesso!' });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await FaturaService.delete(req.params.id);
    res.status(200).send({ message: 'Fatura deletada com sucesso!' });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

export default router;
