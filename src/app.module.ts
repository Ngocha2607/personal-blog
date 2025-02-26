import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogController } from './blog/blog.controller';
import { ConfigModule } from '@nestjs/config';
import { BlogService } from './blog/blog.service';
import { BlogModule } from './blog/blog.module';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
