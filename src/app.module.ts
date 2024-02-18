import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';
import { NoteController } from './note/note.controller';

@Module({
  imports: [AuthModule, UserModule, NoteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
