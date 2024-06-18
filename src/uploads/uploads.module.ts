import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';
import { UploadsService } from './providers/uploads.service';
import { UploadToAwsProvider } from './providers/upload-to-aws.provider';

@Module({
  controllers: [UploadsController],
  providers: [UploadsService, UploadToAwsProvider]
})
export class UploadsModule {}
