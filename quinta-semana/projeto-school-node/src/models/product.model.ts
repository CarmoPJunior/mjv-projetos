import { Schema } from 'mongoose';
import mongoose from 'mongoose';

export interface IProduct {
  description: string;
  img: string;
  price: number;
  quantity: number;
  createdAt: Date;
}

export const productSchema = new Schema<IProduct>({
  description: {
    type: String,
    unique: true,
    required: true,
  },
  img: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const Product = mongoose.model<IProduct>('Product', productSchema);
