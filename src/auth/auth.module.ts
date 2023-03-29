import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { Auth, AuthSchema } from './auth.model';

@Module({
	controllers: [AuthController],
	imports: [
		MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
	],
})
export class AuthModule {}
