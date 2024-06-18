import { Module } from '@nestjs/common';
import { MailService } from './providers/mail.service';

@Module({
  providers: [MailService]
})
export class MailModule {}
