import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoccerService } from './soccer.service';
import { CreateSoccerDto } from './dto/create-soccer.dto';
import { UpdateSoccerDto } from './dto/update-soccer.dto';

@Controller('soccer')
export class SoccerController {
  constructor(private readonly soccerService: SoccerService) {}

  @Post()
  create(@Body() createSoccerDto: CreateSoccerDto) {
    return this.soccerService.create(createSoccerDto);
  }

  @Get()
  findAll() {
    return this.soccerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soccerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoccerDto: UpdateSoccerDto) {
    return this.soccerService.update(+id, updateSoccerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soccerService.remove(+id);
  }
}
