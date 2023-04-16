import { ICategoria, Categoria } from '../models/categoria.model';
import { getDateToday } from '../utils/dateUtil';

class CategoriatRepository {
  getAll() {
    return Categoria.find();
  }

  getById(id: string) {
    return Categoria.findOne({ _id: id });
  }

  getByName(nome: string) {
    return Categoria.findOne({ nome: nome });
  }

  create(categoria: ICategoria) {
    return Categoria.create(categoria);
  }

  update(id: string, categoria: Partial<ICategoria>) {
    categoria.updatedAt = getDateToday();
    return Categoria.updateOne({ _id: id, $set: categoria });
  }

  remove(id: string) {
    return Categoria.deleteOne({ _id: id });
  }
}

export default new CategoriatRepository();
