import CategoriaRepository from '../repositories/categoria.repository';
import { ICategoria } from '../models/categoria.model';

class CategoriaService {
  async getAll() {
    return await CategoriaRepository.getAll();
  }

  async getById(id: string) {
    const categoria = await CategoriaRepository.getById(id);
    if (!categoria) {
      throw new Error('Categoria não encontrada!');
    }
    return categoria;
  }

  async getByName(nome: string) {
    const categoria = await CategoriaRepository.getByName(nome);
    if (!categoria) {
      throw new Error('Categoria não encontrada!');
    }
    return categoria;
  }

  async create(categoria: ICategoria) {
    return await CategoriaRepository.create(categoria);
  }

  async update(id: string, updatedFields: Partial<ICategoria>) {
    const categoria = await CategoriaRepository.getById(id);

    if (!categoria) {
      throw new Error('Categoria não encontrada!');
    }

    return await CategoriaRepository.update(id, updatedFields);
  }

  async delete(id: string) {
    const categoria = await CategoriaRepository.getById(id);

    if (!categoria) {
      throw new Error('Categoria não encontrada!');
    }
    return await CategoriaRepository.remove(id);
  }
}

export default new CategoriaService();
