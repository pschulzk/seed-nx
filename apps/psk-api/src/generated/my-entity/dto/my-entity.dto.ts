import { ApiProperty } from '@nestjs/swagger';

export class MyEntityDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
}
