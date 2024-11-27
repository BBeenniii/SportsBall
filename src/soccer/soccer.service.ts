import { Injectable } from '@nestjs/common';
import { CreateSoccerDto } from './dto/create-soccer.dto';
import { UpdateSoccerDto } from './dto/update-soccer.dto';

@Injectable()
export class SoccerService {
  create(createSoccerDto: CreateSoccerDto) {
    return 'This action adds a new soccer';
  }

  findAll() {
    return `This action returns all soccer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soccer`;
  }

  update(id: number, updateSoccerDto: UpdateSoccerDto) {
    return `This action updates a #${id} soccer`;
  }

  remove(id: number) {
    return `This action removes a #${id} soccer`;
  }
}
