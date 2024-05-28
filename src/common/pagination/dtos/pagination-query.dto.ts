import { IsOptional, IsPositive } from 'class-validator';

import { Type } from 'class-transformer';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  limit?: number = 10;

  @IsOptional()
  @IsPositive()
  page?: number = 1;
}
