import { Test, TestingModule } from '@nestjs/testing';
import { SoccerController } from './soccer.controller';
import { SoccerService } from './soccer.service';

describe('SoccerController', () => {
  let controller: SoccerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoccerController],
      providers: [SoccerService],
    }).compile();

    controller = module.get<SoccerController>(SoccerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
