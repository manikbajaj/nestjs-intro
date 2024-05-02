import { postStatus } from '../enums/post-status.enum';

export class CreatePostDto {
  title: string;
  postType: string;
  slug: string;
  status: postStatus;
  content: string;
  schema: string;
  featuredImageUrl: string;
  publishOn: Date;
  tags: ['typescript', 'nestjs'];
  metaOptions: [{ key: 'sidebarEnabled'; value: false }];
}
