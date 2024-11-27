import { Test, TestingModule } from '@nestjs/testing';
import { SoccerService } from './soccer.service';

describe('SoccerService', () => {
  let service: SoccerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoccerService],
    }).compile();

    service = module.get<SoccerService>(SoccerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
