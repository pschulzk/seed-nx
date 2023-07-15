import { Injectable } from '@nestjs/common'
import { PrismaCrudService } from 'nestjs-prisma-crud'

@Injectable()
export class MyEntityService extends PrismaCrudService {
  constructor() {
    super({
      model: 'myEntity',
      allowedJoins: [],
      defaultJoins: [],
    })
  }
}
