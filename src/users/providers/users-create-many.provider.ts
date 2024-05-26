import { CreateUserDto } from '../dtos/create-user.dto';
import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from '../user.entity';

@Injectable()
export class UsersCreateManyProvider {
  constructor(
    /**
     * Inject the datasource
     */
    private dataSource: DataSource,
  ) {}

  public async createMany(createUsersDto: CreateUserDto[]) {
    let newUsers: User[] = [];
    console.log(createUsersDto);

    // Create Query Runner Instance
    const queryRunner = this.dataSource.createQueryRunner();

    // Connect the query ryunner to the datasource
    await queryRunner.connect();

    // Start the transaction
    await queryRunner.startTransaction();

    try {
      for (let user of createUsersDto) {
        let newUser = queryRunner.manager.create(User, user);
        let result = await queryRunner.manager.save(newUser);
        newUsers.push(result);
      }
      await queryRunner.commitTransaction();
    } catch (error) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }

    return newUsers;
  }
}
