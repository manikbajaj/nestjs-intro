import { Module } from '@nestjs/common';
import { Tag } from './tag.entity';
import { TagsController } from './tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TagsController],
  imports: [TypeOrmModule.forFeature([Tag])],
})
export class TagsModule {}
