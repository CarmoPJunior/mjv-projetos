import { Document, model, Schema } from 'mongoose';
import { getDateToday } from '../utils/dateUtil';

export interface ICategoria{
  _id?: string;
  nome: string;
  descricao: string;
  createdAt: Date;
  updatedAt?: Date ;
}

const categoriaSchema = new Schema({
  nome: {
    type: String,
    unique: true,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: getDateToday(),
  },
  updatedAt: {
    type: Date,
  },
});

export const Categoria = model<ICategoria>('Categoria', categoriaSchema);
