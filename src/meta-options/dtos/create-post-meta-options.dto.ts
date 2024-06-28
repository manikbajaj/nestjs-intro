import { IsJSON, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePostMetaOptionsDto {
  @IsNotEmpty()
  @IsJSON()
  metaValue: string;
}
