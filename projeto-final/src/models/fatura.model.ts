import { model, Schema } from 'mongoose';
import { getDateToday } from '../utils/dateUtil';
import { ICategoria } from './categoria.model';
import { IUser } from './user.model';
import Status from '../enums/StatusEnum';

export interface IFatura extends Document {
  descricao: string;
  valor: number;
  status: string;
  categoria: ICategoria['_id'];
  user: IUser['_id'];
  createdAt: Date;
  updatedAt: Date;
}

const faturaSchema = new Schema({
  descricao: {
    type: String,
    required: true
  },
  valor: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: Status.PENDENTE
  },
  categoria: {
    type: Schema.Types.ObjectId,
    ref: 'Categoria',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: getDateToday(),
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export const Fatura = model<IFatura>('Fatura', faturaSchema);
