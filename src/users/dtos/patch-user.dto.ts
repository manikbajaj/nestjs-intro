import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/swagger';

export class PatchUserDto extends PartialType(CreateUserDto) {}
