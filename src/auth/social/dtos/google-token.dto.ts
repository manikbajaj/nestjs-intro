import { IsNotEmpty, MaxLength } from 'class-validator';

export class GoogleTokenDto {
  @IsNotEmpty()
  token: string;
}
