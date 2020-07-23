import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  createProduct(
    @Body('title') title: string,
    @Body('price') price: string,
    @Body('desc') desc: string,
  ): Product[] {
    const product = this.productService.createProduct(title, price, desc);
    return product;
  }

  @Get()
  getAllProducts(): Product[] {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getSingleProd(@Param('id') prodId: string): Product {
    return this.productService.getSingleProd(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') title: string,
    @Body('price') price: string,
    @Body('desc') desc: string,
  ): Product[] {
    const p = this.productService.updatePro(prodId, title, price, desc);
    return p;
  }

  @Delete(':id')
  delete(@Param('id') prodId: string) {
    this.productService.delete(prodId);
  }
}
