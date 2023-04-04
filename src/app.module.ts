import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { InjectConnection, MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from './configs/mongo.config';
import { Connection } from 'mongoose';

@Module({
	imports: [
		ConfigModule.forRoot(),
		MongooseModule.forRoot('mongodb://admin:admin@localhost:27017/topapidb'),
		AuthModule,
		TopPageModule,
		ProductModule,
		ReviewModule,
	],

	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
// export class AppModule implements OnModuleInit {
// 	constructor(@InjectConnection() private readonly connection: Connection) {}

// 	async onModuleInit() {
// 		this.connection.on('connected', () => {
// 			console.log('Successfully connected to the database');
// 		});

// 		this.connection.on('error', (error) => {
// 			console.error('Failed to connect to the database:', error.message);
// 		});

// 		this.connection.on('disconnected', () => {
// 			console.warn('Disconnected from the database');
// 		});
// 	}
// }
