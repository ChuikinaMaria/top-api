import {
	Controller,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Get,
	HttpCode,
} from '@nestjs/common';
import { FindProductDto } from './dto/find-product.dto';
import { Product } from './product.model';

@Controller('product')
export class ProductController {
	@Post('create')
	async create(@Body() dto: Omit<Product, '_id'>) {}

	@Get(':id')
	async get(@Param('id') id: string) {}

	@Delete(':id')
	async delete(@Param('id') id: string) {}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: Product) {}

	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindProductDto) {}
}
