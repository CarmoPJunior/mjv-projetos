import { Request, Response, Router } from 'express';
import ProductService from '../services/product.service';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const products = await ProductService.getAll();
    res.status(200).send({ products: products });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const product = await ProductService.getById(req.params.id);
    res.send({ product: product });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    await ProductService.create(req.body);
    res.status(201).send({ message: 'Product added with success' });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    await ProductService.update(id, req.body);
    res.status(200).send({ message: 'Product updated with success' });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await ProductService.delete(req.params.id);
    res.status(200).send({ message: 'Product deleted with success' });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

export default router;
