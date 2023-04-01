import { IProduct } from '../model/product.model';
import productsData from '../data/products-data';

class ProductService {
  products: Array<IProduct> = productsData;

  getAll() {
    return this.products;
  }

  create(product: IProduct) {
    this.products.push(product);
    return product;
  }

  getById(id: string) {
    const product = this.products.find((product) => product.id === parseInt(id));
    console.log(product);
    if (!product) {
      throw new Error('Product not found!');
    }
    return product;
  }

  update(id: string, updatedFields: Partial<IProduct>) {
    const productIndex = this.products.findIndex((product) => product.id === parseInt(id));
    if (productIndex === -1) {
      throw new Error('Product not found!');
    }

    const updatedProduct = {
      ...this.products[productIndex],
      ...updatedFields,
    };

    this.products[productIndex] = updatedProduct;
    return updatedProduct;
  }

  delete(id: string) {
    const productIndex = this.products.findIndex((product) => product.id === parseInt(id));
    if (productIndex === -1) {
      throw new Error('Product not found!');
    }
    this.products.splice(productIndex, 1);
  }
}

export default new ProductService();
