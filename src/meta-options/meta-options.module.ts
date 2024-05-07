import { Module } from '@nestjs/common';
import { MetaOptionsController } from './meta-options.controller';

@Module({
  controllers: [MetaOptionsController]
})
export class MetaOptionsModule {}
