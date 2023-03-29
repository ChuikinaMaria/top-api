import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TopPageDocument = HydratedDocument<TopPage>;

export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}

export class hhData {
	@Prop()
	count: number;
	@Prop()
	juniorSalary: number;
	@Prop()
	middleSalary: number;
	@Prop()
	seniorSalary: number;
}

export class advantage {
	@Prop()
	title: string;
	@Prop()
	description: string;
}

@Schema({ timestamps: true })
export class TopPage {
	@Prop({ enum: TopLevelCategory })
	firstLevelCategory: TopLevelCategory;
	@Prop()
	secondCategory: string;
	@Prop({ unique: true })
	alias: string;
	@Prop()
	title: string;
	@Prop()
	category: string;
	@Prop(hhData)
	hh?: hhData;
	@Prop([advantage])
	advantages: advantage[];
	@Prop()
	seoText: string;
	@Prop()
	tagsTitle: string;
	@Prop([String])
	tags: string[];
}

export const TopPageSchema = SchemaFactory.createForClass(TopPage);
