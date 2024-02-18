import { Test, TestingModule } from '@nestjs/testing';
import { DemonesttController } from './demonestt.controller';

describe('DemonesttController', () => {
  let controller: DemonesttController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemonesttController],
    }).compile();

    controller = module.get<DemonesttController>(DemonesttController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
