import { OmitType, PartialType } from '@nestjs/swagger'
import { MyEntity } from '../entities/my-entity.entity'

export class UpdateMyEntityDto extends PartialType(OmitType(MyEntity, ['id'])) {}
