import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadsService {
  public async uploadFile(file: Express.Multer.File) {
    // Upload file to AWS S3 bucket
    // Generate a new record in upload table
  }
}
