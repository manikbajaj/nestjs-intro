import { faker } from '@faker-js/faker';

export const completeUser = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: 'Password123#',
};

export const misingFirstName = {
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: 'Password123#',
};

export const missingEmail = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  password: 'Password123#',
};

export const missingPassword = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
};
