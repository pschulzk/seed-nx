import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res } from '@nestjs/common'
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'
import { FastifyReply } from 'fastify'
import { CreateMyEntityDto } from './dto/create-my-entity.dto'
import { UpdateMyEntityDto } from './dto/update-my-entity.dto'
import { MyEntityService } from './my-entity.service'

const CRUD_QUERY_EXAMPLE = {}

@ApiTags('my-entity')
@Controller('my-entity')
export class MyEntityController {
  constructor(private readonly myEntityService: MyEntityService) {}

  @Post()
  @ApiParam({ name: 'crudQuery', required: true, example: CRUD_QUERY_EXAMPLE })
  async create(@Body() createMyEntityDto: CreateMyEntityDto, @Query('crudQuery') crudQuery: string) {
    const created = await this.myEntityService.create(createMyEntityDto, { crudQuery })
    return created
  }

  @Get()
  @ApiParam({ name: 'crudQuery', required: true, example: CRUD_QUERY_EXAMPLE })
  async findMany(@Query('crudQuery') crudQuery: string) {
    const matches = await this.myEntityService.findMany({ crudQuery })
    return matches
  }

  @Get(':id')
  @ApiParam({ name: 'crudQuery', required: true, example: CRUD_QUERY_EXAMPLE })
  async findOne(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    const match = await this.myEntityService.findOne(id, { crudQuery })
    return match
  }

  @Patch(':id')
  @ApiParam({ name: 'crudQuery', required: true, example: CRUD_QUERY_EXAMPLE })
  async update(
    @Param('id') id: string,
    @Body() updateMyEntityDto: UpdateMyEntityDto,
    @Query('crudQuery') crudQuery: string,
  ) {
    const updated = await this.myEntityService.update(id, updateMyEntityDto, { crudQuery })
    return updated
  }

  @Delete(':id')
  @ApiResponse({ status: 204 })
  @ApiParam({ name: 'crudQuery', required: true, example: CRUD_QUERY_EXAMPLE })
  async remove(@Param('id') id: string, @Query('crudQuery') crudQuery: string, @Res() res: FastifyReply) {
    await this.myEntityService.remove(id, { crudQuery })
    return res.status(204).send()
  }
}
