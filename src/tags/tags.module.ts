import { Module } from '@nestjs/common';
import { Tag } from './tag.entity';
import { TagsController } from './tags.controller';
import { TagsService } from './providers/tags.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TagsController],
  imports: [TypeOrmModule.forFeature([Tag])],
  providers: [TagsService],
  exports: [TagsService],
})
export class TagsModule {}
