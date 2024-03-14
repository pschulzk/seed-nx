import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ConnectMyEntityDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;
}
