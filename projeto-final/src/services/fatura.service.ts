import FaturaRepository from '../repositories/fatura.repository';
import { IFatura } from '../models/fatura.model';
import Status from '../enums/StatusEnum';
import { getDateToday } from '../utils/dateUtil';

class FaturaService {
  async getAll() {
    return await FaturaRepository.getAll();
  }

  async getAllByStatus(status: string) {

    status = status.toLocaleUpperCase();

    if (!(status in Status)) {
      throw new Error('O Status Informado não existe!');
    }

    return await FaturaRepository.getAll()
    .where({ status: status })
    .exec();

  }

  async getById(id: string) {
    const fatura = await FaturaRepository.getById(id);
    if (!fatura) {
      throw new Error('Fatura não econtrada!');
    }
    return fatura;
  }

  async create(fatura: IFatura) {
    return await FaturaRepository.create(fatura);
  }

  async update(id: string, updatedFields: Partial<IFatura>) {
    const fatura = await FaturaRepository.getById(id);

    if (!fatura) {
      throw new Error('Fatura não econtrada!');
    }

    return await FaturaRepository.update(id, updatedFields);
  }

  async baixarFatura(id: string, updatedFields: Partial<IFatura>) {
    const fatura = await FaturaRepository.getById(id);

    if (!fatura) {
      throw new Error('Fatura não econtrada!');
    }

    fatura.dataPagamento = updatedFields.dataPagamento || getDateToday();
    fatura.status = Status.PAGO;

    return await FaturaRepository.update(id, fatura);
  }

  async delete(id: string) {
    const fatura = await FaturaRepository.getById(id);

    if (!fatura) {
      throw new Error('Fatura não econtrada!');
    }
    return await FaturaRepository.remove(id);
  }
}

export default new FaturaService();
