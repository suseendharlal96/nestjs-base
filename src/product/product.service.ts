import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async createProduct(title, price, description) {
    const prodId = Math.random().toString();
    const product = new this.productModel({
      title,
      price,
      description,
    });
    const result = await product.save();
    return result;
  }

  async getAllProducts() {
    const result = await this.productModel.find({}, { __v: 0 }).exec();
    return result;
  }

  async getSingleProd(prodId: string) {
    const result = await this.productModel.findById(prodId);
    return result;
  }

  async updatePro(
    prodId: string,
    title: string,
    price: string,
    description: string,
  ) {
    await this.productModel.updateOne(
      { _id: prodId },
      {
        $set: {
          title,
          price,
          description,
        },
      },
    );
  }

  async delete(prodId: string) {
    await this.productModel.deleteOne({ _id: prodId });
  }
}
