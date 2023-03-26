import { Request, Response, Router } from 'express';
import products from '../data/products-data';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send({ products: products });
});

router.get('/:id', (req: Request, res: Response) => {
  const product = products.find((item) => item.id === Number(req.params.id));

  if (!product) {
    return res.status(400).send({ message: 'product not found' });
  }

  res.send({ product: product });
});

router.post('/', (req: Request, res: Response) => {
  if (req.body) {
    products.push(req.body);
    return res.status(201).send({ message: 'Product added with success' });
  }

  return res.status(400).send({ message: 'an error happened, try again' });
});

router.put('/:id', (req: Request, res: Response) => {
  const findProduct = products.findIndex((item) => item.id === Number(req.params.id));

  if (findProduct === -1) {
    return res.status(400).send({ message: 'product not found' });
  }

  products[findProduct] = req.body;
  res.status(200).send({ message: 'Product added with success' });
});

router.delete('/delete/:id', (req: Request, res: Response) => {
  const findProduct = products.findIndex((item) => item.id === Number(req.params.id));

  if (findProduct === -1) {
    return res.status(400).send({ message: 'product not found' });
  }

  products.splice(findProduct, 1);
  res.status(200).send({ message: 'Product deleted with success' });
});

export default router;
