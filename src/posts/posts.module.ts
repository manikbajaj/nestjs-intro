import { MetaOption } from 'src/meta-options/meta-option.entity';
import { MetaOptionsModule } from 'src/meta-options/meta-options.module';
import { Module } from '@nestjs/common';
import { Post } from './post.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './providers/posts.service';
import { TagsModule } from 'src/tags/tags.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [UsersModule, TypeOrmModule.forFeature([Post, User]), TagsModule],
})
export class PostsModule {}
