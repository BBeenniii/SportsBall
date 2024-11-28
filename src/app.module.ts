import { Module } from '@nestjs/common';
import { SoccerModule } from './soccer/soccer.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [SoccerModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}