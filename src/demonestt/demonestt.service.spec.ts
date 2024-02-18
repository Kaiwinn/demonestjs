import { Test, TestingModule } from '@nestjs/testing';
import { DemonesttService } from './demonestt.service';

describe('DemonesttService', () => {
  let service: DemonesttService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemonesttService],
    }).compile();

    service = module.get<DemonesttService>(DemonesttService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
