import { Module } from '@nestjs/common';
import { Tag } from './tag.entity';
import { TagsController } from './tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsService } from './providers/tags.service';

@Module({
  controllers: [TagsController],
  imports: [TypeOrmModule.forFeature([Tag])],
  providers: [TagsService],
})
export class TagsModule {}
