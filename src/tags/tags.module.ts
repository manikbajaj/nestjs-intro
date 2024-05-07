import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';

@Module({
  controllers: [TagsController]
})
export class TagsModule {}
