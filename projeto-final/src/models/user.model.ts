import {Document, model, Schema } from 'mongoose';
import { getDateToday } from '../utils/dateUtil';

export interface IUser extends Document{
  login: string;
  password: string;
  ativo: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema({
  login: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  ativo:{
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: getDateToday(),
  },
  updatedAt: {
    type: Date
  },
});

export const User = model<IUser>('User', userSchema);
