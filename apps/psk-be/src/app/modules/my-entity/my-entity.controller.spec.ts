import { Test, TestingModule } from '@nestjs/testing';
import { MyEntityController } from './my-entity.controller';
import { MyEntityService } from './my-entity.service';

describe('MyEntityController', () => {
  let controller: MyEntityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyEntityController],
      providers: [MyEntityService],
    }).compile();

    controller = module.get<MyEntityController>(MyEntityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
