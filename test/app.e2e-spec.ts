import * as request from 'supertest';

import { Test, TestingModule } from '@nestjs/testing';

import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    console.log(process.env.NODE_ENV);
    console.log(process.env.S3_BUCKET);
    return request(app.getHttpServer()).get('/').expect(404);
  });
});
