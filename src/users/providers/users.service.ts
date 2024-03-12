import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  public findAll(
    getUserParamDto: GetUsersParamDto,
    limt: number,
    page: number,
  ) {
    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        firstName: 'Alice',
        email: 'alice@doe.com',
      },
    ];
  }
}
