import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewModel, ReviewDocument } from './review.model';
import { DeleteResult } from 'mongodb';

@Injectable()
export class ReviewService {
	constructor(
		@InjectModel(ReviewModel.name)
		private readonly reviewModel: Model<ReviewModel>,
	) {}

	async create(dto: CreateReviewDto): Promise<ReviewDocument> {
		return this.reviewModel.create(dto);
	}

	async delete(id: string): Promise<ReviewDocument | null> {
		return this.reviewModel.findByIdAndDelete(id).exec();
	}

	async findProductId(productId: string): Promise<ReviewDocument[]> {
		return this.reviewModel
			.find({ productId: new Types.ObjectId(productId) })
			.exec();
	}

	async deleteByProductId(productId: string): Promise<DeleteResult> {
		return this.reviewModel
			.deleteMany({ productId: new Types.ObjectId(productId) })
			.exec();
	}
}
