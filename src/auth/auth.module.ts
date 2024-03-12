import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './providers/auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
