import { Module } from '@nestjs/common';
import { SoccerService } from './soccer.service';
import { SoccerController } from './soccer.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SoccerController],
  providers: [SoccerService, PrismaService],
})
export class SoccerModule {}
