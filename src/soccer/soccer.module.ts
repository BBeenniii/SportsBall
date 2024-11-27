import { Module } from '@nestjs/common';
import { SoccerService } from './soccer.service';
import { SoccerController } from './soccer.controller';

@Module({
  controllers: [SoccerController],
  providers: [SoccerService],
})
export class SoccerModule {}
