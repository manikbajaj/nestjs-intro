import { ConfigService } from '@nestjs/config';
import { INestApplication } from '@nestjs/common';
import { bootstrapNestApplication } from 'test/helpers/bootstrap-nest-application.helper';
import { dropDatabase } from 'test/helpers/drop-database.helper';

describe('[Users] @Post Endpoints', () => {
  let app: INestApplication;
  let config: ConfigService;

  beforeEach(async () => {
    // Instantiate the app
    app = await bootstrapNestApplication();
    // Get the config
    config = app.get<ConfigService>(ConfigService);
  });

  afterEach(async () => {
    await dropDatabase(config);
    await app.close();
  });

  it.todo('/users - Endpoint is public');
  it.todo('/users - firstName is mandatory');
  it.todo('/users - lastName is mandatory');
  it.todo('/users - email is mandatory');
  it.todo('/users - Valid request successfully creates user');
  it.todo('/users - password is not returned in response');
  it.todo('/users - googleId is not returned in response');
});
