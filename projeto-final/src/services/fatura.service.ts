import FaturaRepository from '../repositories/fatura.repository';
import { IFatura } from '../models/fatura.model';

class FaturaService {
  async getAll() {
    return await FaturaRepository.getAll();
  }

  async getById(id: string) {
    const fatura = await FaturaRepository.getById(id);
    if (!fatura) {
      throw new Error('Fatura not found!');
    }
    return fatura;
  }

  async create(fatura: IFatura) {
    return await FaturaRepository.create(fatura);
  }

  async update(id: string, updatedFields: Partial<IFatura>) {
    const fatura = await FaturaRepository.getById(id);

    if (!fatura) {
      throw new Error('Fatura not found!');
    }

    return await FaturaRepository.update(id, updatedFields);
  }

  async delete(id: string) {
    const fatura = await FaturaRepository.getById(id);

    if (!fatura) {
      throw new Error('Fatura not found!');
    }
    return await FaturaRepository.remove(id);
  }
}

export default new FaturaService();
