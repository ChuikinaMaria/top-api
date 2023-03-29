import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { Review } from './review.model';

@Controller('review')
export class ReviewController {
	@Post('create')
	async create(@Body() dto: Omit<Review, '_id'>) {}

	@Delete(':id')
	async delete(@Param('id') id: string) {}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string) {}
}
