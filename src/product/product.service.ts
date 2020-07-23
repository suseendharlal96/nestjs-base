import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  createProduct(title, price, desc) {
    const prodId = Math.random().toString();
    const product = new Product(prodId, title, price, desc);
    this.products.push(product);
    return this.products;
  }

  getAllProducts() {
    return [...this.products];
  }

  getSingleProd(prodId: string) {
    return this.products.find(p => p.id === prodId);
  }

  updatePro(prodId: string, title: string, price: string, desc: string) {
    const prodIndex = this.products.findIndex(p => p.id === prodId);
    if (prodIndex === -1) {
      throw new NotFoundException('Product not found');
    }
    const updated: Product[] = [...this.products];
    updated[prodIndex].title = title;
    updated[prodIndex].price = price;
    updated[prodIndex].description = desc;
    return updated;
  }

  delete(prodId: string) {
    const prodIndex = this.products.findIndex(p => p.id === prodId);
    if (prodIndex === -1) {
      throw new NotFoundException('Product not found');
    }
    this.products.splice(prodIndex, 1);
  }
}
