import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { Product, ProductSchema } from './product.model';

@Module({
	controllers: [ProductController],
	imports: [
		MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
	],
})
export class ProductModule {}
