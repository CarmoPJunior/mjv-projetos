import ProductRepository from '../repositories/product.repository';
import { IProduct } from '../models/product.model';

class ProductService {
  async getAll() {
    return await ProductRepository.getAll();
  }

  async getById(id: string) {
    const product = await ProductRepository.getById(id);
    if (!product) {
      throw new Error('Product not found!');
    }
    return product;
  }

  async create(product: IProduct) {
    return await ProductRepository.create(product);
  }

  async update(id: string, updatedFields: Partial<IProduct>) {
    const product = await ProductRepository.getById(id);

    if (!product) {
      throw new Error('Product not found!');
    }

    return await ProductRepository.update(id, updatedFields);
  }

  async delete(id: string) {
    const product = await ProductRepository.getById(id);

    if (!product) {
      throw new Error('Product not found!');
    }
    return await ProductRepository.remove(id);
  }
}

export default new ProductService();
