import { Test, TestingModule } from '@nestjs/testing';

import { CreateGoogleUserProvider } from './create-google-user.provider';
import { CreateUserDto } from '../dtos/create-user.dto';
import { CreateUserProvider } from './create-user.provider';
import { DataSource } from 'typeorm';
import { FindOneByGoogleIdProvider } from './find-one-by-google-id.provider';
import { FindOneUserByEmailProvider } from './find-one-user-by-email.provider';
import { User } from '../user.entity';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { UsersService } from './users.service';
import { create } from 'domain';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const mockCreateUsersProvider: Partial<CreateUserProvider> = {
      createUser: (createUserDto: CreateUserDto) =>
        Promise.resolve({
          id: 12,
          firstName: createUserDto.firstName,
          lastName: createUserDto.lastName,
          email: createUserDto.email,
          password: createUserDto.password,
        }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: DataSource, useValue: {} },
        { provide: getRepositoryToken(User), useValue: {} },
        { provide: CreateUserProvider, useValue: mockCreateUsersProvider },
        { provide: UsersCreateManyProvider, useValue: {} },
        { provide: FindOneUserByEmailProvider, useValue: {} },
        { provide: FindOneByGoogleIdProvider, useValue: {} },
        { provide: CreateGoogleUserProvider, useValue: {} },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createUser', () => {
    it('Should be defined', () => {
      expect(service.createUser).toBeDefined();
    });

    it('Should call createUser on createUserProvider', async () => {
      let user = await service.createUser({
        firstName: 'john',
        lastName: 'Doe',
        email: 'john@doe.com',
        password: 'password',
      });
      expect(user.firstName).toEqual('john');
    });
  });
});
