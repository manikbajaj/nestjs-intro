import { Faker } from '@faker-js/faker';
import { Post } from 'src/posts/post.entity';
import { User } from 'src/users/user.entity';
import { define } from 'typeorm-seeding';
import { postStatus } from 'src/posts/enums/postStatus.enum';
import { postType } from 'src/posts/enums/postType.enum';

define(Post, (faker: Faker) => {
  const post = new Post();
  post.title = faker.lorem.sentence({ min: 5, max: 7 });
  post.postType = faker.helpers.enumValue(postType);
  post.slug = faker.lorem.slug();
  post.status = faker.helpers.enumValue(postStatus);
  post.content = faker.lorem.paragraph({ min: 2, max: 4 });
  post.featuredImageUrl = faker.image.urlLoremFlickr();
  return post;
});
