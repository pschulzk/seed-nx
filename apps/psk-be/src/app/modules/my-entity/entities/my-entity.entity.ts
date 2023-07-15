import { ApiProperty } from '@nestjs/swagger'

export class MyEntity {
  @ApiProperty()
    id: string
  @ApiProperty()
    name: string
}
