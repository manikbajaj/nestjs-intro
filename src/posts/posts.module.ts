import { MetaOption } from 'src/meta-options/meta-option.entity';
import { MetaOptionsModule } from 'src/meta-options/meta-options.module';
import { Module } from '@nestjs/common';
import { Post } from './post.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './providers/posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([Post, MetaOption]),
    MetaOptionsModule,
  ],
})
export class PostsModule {}
