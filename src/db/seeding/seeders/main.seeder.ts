import { Factory, Seeder } from 'typeorm-seeding';

import { DataSource } from 'typeorm';
import { Post } from 'src/posts/post.entity';
import { User } from 'src/users/user.entity';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, datasource: DataSource): Promise<void> {
    // Use a factory function to create users
    const users = await factory(User)().createMany(15);

    // Create Posts and assign users
    await factory(Post)()
      .map(async (post) => {
        post.author = users[Math.floor(Math.random() * users.length)];
        return post;
      })
      .createMany(100);
  }
}
