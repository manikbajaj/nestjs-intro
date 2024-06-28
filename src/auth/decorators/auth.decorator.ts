import { AuthType } from '../enums/auth-type.enum';
import { SetMetadata } from '@nestjs/common';

export const AUTH_TYPE_KEY = 'authType';

export const Auth = (...authTypes: AuthType[]) =>
  SetMetadata(AUTH_TYPE_KEY, authTypes);
