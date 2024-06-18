import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';
import { UploadsService } from './providers/uploads.service';

@Module({
  controllers: [UploadsController],
  providers: [UploadsService]
})
export class UploadsModule {}
