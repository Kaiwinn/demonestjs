import { Module } from '@nestjs/common';
import { DemonesttController } from './demonestt.controller';
import { DemonesttService } from './demonestt.service';

@Module({
  controllers: [DemonesttController],
  providers: [DemonesttService]
})
export class DemonesttModule {}
