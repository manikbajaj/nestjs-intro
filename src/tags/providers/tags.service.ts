import { Repository } from 'typeorm';
import { CreateTagDto } from '../dtos/create-tag.dto';
import { Injectable } from '@nestjs/common';
import { Tag } from '../tag.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagsService {
  constructor(
    /**
     * Inject tagsRepository
     */
    @InjectRepository(Tag)
    private readonly tagsRepository: Repository<Tag>,
  ) {}

  public async create(createTagDto: CreateTagDto) {
    return await this.tagsRepository.create(createTagDto);
  }
}
