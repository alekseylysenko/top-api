import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { ProductController } from './product/product.controller';
import { ReviewController } from './review/review.controller';
import { ReviewModule } from './review/review.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ReviewModule,
    TopPageModule,
    ProductModule,
    AuthModule,
  ],
  controllers: [
    AppController,
    AuthController,
    ProductController,
    ReviewController,
  ],
  providers: [AppService],
})
export class AppModule {}
