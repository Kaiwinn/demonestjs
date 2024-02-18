import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemonesttModule } from './demonestt/demonestt.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DemonesttModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
