import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type AuthDocument = HydratedDocument<Auth>;

@Schema({ timestamps: true })
export class Auth {
	@Prop({ required: true, unique: true })
	email: string;

	@Prop({ required: true })
	passwordHash: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
