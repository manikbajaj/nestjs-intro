import { Module } from '@nestjs/common';
import { PaginationProvider } from './pagination/providers/pagination.provider';

@Module({
  providers: [PaginationProvider],
})
export class PaginationModule {}
