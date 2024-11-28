import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SoccerService } from './soccer.service';
import { Player, Team } from '@prisma/client';
@Controller('soccer')
export class SoccerController {
  constructor(private readonly soccerService: SoccerService) {}

  @Get('teams')
  getTeams(): Promise<Team[]> {
    return this.soccerService.getTeams();
  }

  @Post('teams')
  createTeam(@Body() teamData: { country: string }): Promise<Team> {
    return this.soccerService.createTeam(teamData);
  }

  @Delete('teams/:id')
  deleteTeam(@Param('id') id: string): Promise<void> {
    return this.soccerService.deleteTeam(+id);
  }

  @Get('players')
  getPlayers(): Promise<Player[]> {
    return this.soccerService.getPlayers();
  }

  @Post('players')
  createPlayer(@Body() playerData: { name: string; goalCount: number; birthDate: string; teamId: number }): Promise<Player> {
    return this.soccerService.createPlayer(playerData);
  }

  @Delete('players/:id')
  deletePlayer(@Param('id') id: string): Promise<void> {
    return this.soccerService.deletePlayer(+id);
  }
}