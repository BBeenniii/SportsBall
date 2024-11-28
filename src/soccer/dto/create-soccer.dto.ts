import { IsInt, IsString, IsDate, IsNotEmpty, isNotEmpty } from "class-validator"; 

export class CreateSoccerDto {
    @IsNotEmpty()
    @IsString()
    name: string
    
    @IsNotEmpty()
    @IsInt()
    goalCount: number

    @IsNotEmpty()
    @IsDate()
    birthDate: Date
}
