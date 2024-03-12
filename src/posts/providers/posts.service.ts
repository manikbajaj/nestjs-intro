import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  public findAll(userId: string) {
    console.log(userId);
  }
}
