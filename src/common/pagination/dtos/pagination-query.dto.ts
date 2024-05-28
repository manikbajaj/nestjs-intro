import { IsOptional, IsPositive } from 'class-validator';

import { Type } from 'class-transformer';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  // Number of entries to return
  limit?: number;

  @IsOptional()
  @IsPositive()
  // Number of entries to skip from start
  offset?: number;
}
