import { Test, TestingModule } from '@nestjs/testing';

import { CreateUserProvider } from './create-user.provider';
import { DataSource } from 'typeorm';
import { HashingProvider } from 'src/auth/providers/hashing.provider';
import { MailService } from 'src/mail/providers/mail.service';
import { User } from '../user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('CreateUserProvider', () => {
  let provider: CreateUserProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserProvider,
        { provide: DataSource, useValue: {} },
        { provide: getRepositoryToken(User), useValue: {} },
        { provide: HashingProvider, useValue: {} },
        { provide: MailService, useValue: {} },
      ],
    }).compile();

    provider = module.get<CreateUserProvider>(CreateUserProvider);
  });

  it('Should Be Defined', () => {
    expect(provider).toBeDefined();
  });
});
