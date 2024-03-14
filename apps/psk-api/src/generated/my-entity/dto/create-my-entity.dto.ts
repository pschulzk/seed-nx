import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMyEntityDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
}
