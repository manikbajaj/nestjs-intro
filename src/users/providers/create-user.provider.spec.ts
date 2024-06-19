import { DataSource, Repository } from 'typeorm';
import { Test, TestingModule } from '@nestjs/testing';

import { CreateUserProvider } from './create-user.provider';
import { HashingProvider } from 'src/auth/providers/hashing.provider';
import { MailService } from 'src/mail/providers/mail.service';
import { User } from '../user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
const createMockRepository = <T = any>(): MockRepository<T> => ({
  findOne: jest.fn(),
  create: jest.fn(),
});

describe('CreateUserProvider', () => {
  let provider: CreateUserProvider;
  let usersRepository: MockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserProvider,
        { provide: DataSource, useValue: {} },
        { provide: getRepositoryToken(User), useValue: createMockRepository() },
        { provide: HashingProvider, useValue: {} },
        { provide: MailService, useValue: {} },
      ],
    }).compile();

    provider = module.get<CreateUserProvider>(CreateUserProvider);
    usersRepository = module.get(getRepositoryToken(User));
  });

  it('Should Be Defined', () => {
    expect(provider).toBeDefined();
  });
});
