import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

import { AppModule } from '../../src/app.module';
import { INestApplication } from '@nestjs/common';
import { appCreate } from '../../src/app.create';

export async function bootstrapNestApplication(): Promise<INestApplication> {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule, ConfigModule],
    providers: [ConfigService],
  }).compile();

  // Instatiate the app
  const app: INestApplication = moduleFixture.createNestApplication();
  await appCreate(app);
  await app.init();
  return app;
}
