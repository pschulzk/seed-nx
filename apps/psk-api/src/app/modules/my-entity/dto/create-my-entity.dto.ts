import { OmitType, PartialType } from '@nestjs/swagger'
import { MyEntity } from '../entities/my-entity.entity'

export class CreateMyEntityDto extends PartialType(OmitType(MyEntity, ['id'])) {}
