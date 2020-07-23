import { Schema } from 'mongoose';

export const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export interface Product {
  id: string;
  title: string;
  price: string;
  description: string;
}
