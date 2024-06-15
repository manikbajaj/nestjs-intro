import { Faker } from '@faker-js/faker';
import { User } from 'src/users/user.entity';
import { define } from 'typeorm-seeding';

define(User, (faker: Faker) => {
  const user = new User();
  user.firstName = faker.person.firstName();
  user.lastName = faker.person.lastName();
  user.email = faker.internet.email();
  return user;
});
