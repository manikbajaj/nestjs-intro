import { IsNotEmpty, MaxLength } from 'class-validator';

export class GoogleTokenDto {
  @IsNotEmpty()
  @MaxLength(512)
  token: string;
}
