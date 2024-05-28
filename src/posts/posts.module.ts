import { MetaOption } from 'src/meta-options/meta-option.entity';
import { Module } from '@nestjs/common';
import { PaginationModule } from 'src/common/pagination/pagination.module';
import { Post } from './post.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './providers/posts.service';
import { TagsModule } from 'src/tags/tags.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [
    UsersModule,
    TagsModule,
    PaginationModule,
    TypeOrmModule.forFeature([Post, MetaOption]),
  ],
})
export class PostsModule {}
