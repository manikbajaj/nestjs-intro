import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
/*
 * User created modules
 */

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
