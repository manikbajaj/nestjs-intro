import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';
import { MetaOptionsService } from './providers/meta-options.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('meta-options')
export class MetaOptionsController {
  constructor(
    /**
     * Inject MetaOptionsService
     * */
    private readonly MetaOptionsService: MetaOptionsService,
  ) {}

  @Post()
  public async create(
    @Body() createPostMetaOptionsDto: CreatePostMetaOptionsDto,
  ) {
    return this.MetaOptionsService.create(createPostMetaOptionsDto);
  }
}
