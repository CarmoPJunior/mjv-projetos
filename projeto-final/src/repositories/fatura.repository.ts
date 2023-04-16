import { IFatura, Fatura } from '../models/fatura.model';
import { getDateToday } from '../utils/dateUtil';

class FaturaRepository {
  getAll() {
    return Fatura.find();
  }

  getById(id: string) {
    return Fatura.findOne({ _id: id });
  }

  create(fatura: IFatura) {
    return Fatura.create(fatura);
  }

  update(id: string, fatura: Partial<IFatura>) {
    fatura.updatedAt = getDateToday();
    return Fatura.updateOne({ _id: id, $set: fatura });
  }

  remove(id: string) {
    return Fatura.deleteOne({ _id: id });
  }
}

export default new FaturaRepository();
