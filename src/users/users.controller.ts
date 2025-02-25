import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Body,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id?/{:optional}') // With NEstJS 11 + use this syntax {:optional}
  public getUsers() {
    return 'You sent a get request to users endpoint';
  }

  @Post()
  public createUsers() {
    return 'You sent a post request to users endpoint';
  }
}
