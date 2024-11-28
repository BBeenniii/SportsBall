import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Player, Team } from '@prisma/client';

@Injectable()
export class SoccerService {
  constructor(private prisma: PrismaService) {}

  async getTeams(): Promise<Team[]> {
    return this.prisma.team.findMany({ include: { players: true } });
  }

  async createTeam(data: { country: string }): Promise<Team> {
    return this.prisma.team.create({ data });
  }

  async deleteTeam(id: number): Promise<void> {
    await this.prisma.team.delete({ where: { id } });
  }

  async getPlayers(): Promise<Player[]> {
    return this.prisma.player.findMany({ include: { team: true } });
  }

  async createPlayer(data: { name: string; goalCount: number; birthDate: string; teamId: number }): Promise<Player> {
    return this.prisma.player.create({
      data: {
        ...data,
        birthDate: new Date(data.birthDate),
      },
    });
  }

  async deletePlayer(id: number): Promise<void> {
    await this.prisma.player.delete({ where: { id } });
  }
}