import { PartialType } from '@nestjs/mapped-types';
import { CreateSoccerDto } from './create-soccer.dto';

export class UpdateSoccerDto extends PartialType(CreateSoccerDto) {}
