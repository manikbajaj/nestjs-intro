import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  public findAll(userId: string) {
    // Users Service
    // Find A User

    return [
      {
        title: 'Test Tile',
        content: 'Test Content',
      },
      {
        title: 'Test Tile 2',
        content: 'Test Content 2',
      },
    ];
  }
}
