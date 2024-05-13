import { TagsService } from './../../tags/providers/tags.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Injectable } from '@nestjs/common';
import { MetaOptionsService } from './../../meta-options/meta-options.service';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { User } from 'src/users/user.entity';
import { waitForDebugger } from 'inspector';

@Injectable()
export class PostsService {
  constructor(
    /*
     * Injecting Users Service
     */
    private readonly usersService: UsersService,

    /**
     * Injecting postsRepository
     */
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,

    /**
     * Injecting UsersRepository
     */
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    /**
     * Injecting Tags service
     */
    private readonly tagsService: TagsService,
  ) {}

  /**
   * Method to create a new post
   */
  public async create(createPostDto: CreatePostDto) {
    let user = await this.usersRepository.findOneBy({
      id: createPostDto.authorId,
    });

    let tags = await this.tagsService.findMultipleTags(createPostDto.tags);

    // Create the post
    let post = this.postsRepository.create({
      ...createPostDto,
      author: user,
      tags: tags,
    });

    return await this.postsRepository.save(post);
  }

  /**
   * Method to find all posts
   */
  public async findAll(userId: string) {
    // find all posts
    let posts = await this.postsRepository.find({
      relations: {
        metaOptions: true,
        author: true,
      },
    });

    return posts;
  }

  /**
   * Method to delete a post from the database
   */
  public async delete(id: number) {
    // Find the post from the database
    await this.postsRepository.delete(id);

    return { deleted: true, id };
  }
}
