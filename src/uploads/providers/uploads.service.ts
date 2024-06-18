import { ConfigService } from '@nestjs/config';
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { UploadFile } from '../interfaces/upload-file.interface';
import { UploadToAwsProvider } from './upload-to-aws.provider';
import { fileTypes } from '../enums/file-types.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { Upload } from '../upload.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UploadsService {
  constructor(
    /**
     * Inject uploadToAwsProvider
     */
    private readonly uploadToAwsProvider: UploadToAwsProvider,
    /**
     * inject configService
     */
    private readonly configService: ConfigService,
    /**
     * inject uploadsRepository
     */
    @InjectRepository(Upload)
    private uploadsRepository: Repository<Upload>,
  ) {}
  public async uploadFile(file: Express.Multer.File) {
    // throw error for unsupported file types
    if (
      !['image/gif', 'image/jpeg', 'image/jpg', 'image/png'].includes(
        file.mimetype,
      )
    ) {
      throw new BadRequestException('MIME type not supported');
    }

    try {
      // Upload file to AWS S3 bucket
      const path = await this.uploadToAwsProvider.fileupload(file);
      // Generate a new record in upload table
      const uploadFile: UploadFile = {
        name: path,
        path: `https://${this.configService.get<string>('appConfig.awsCloudfrontUrl')}/${path}`,
        type: fileTypes.IMAGE,
        mime: file.mimetype,
        size: file.size,
      };
      // create an upload
      const upload = this.uploadsRepository.create(uploadFile);
      // save the details to database
      return await this.uploadsRepository.save(upload);
    } catch (error) {
      throw new ConflictException(error);
    }
  }
}
