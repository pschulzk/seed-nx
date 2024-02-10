import { Test, TestingModule } from '@nestjs/testing';
import { MyEntityService } from './assistant.service';

describe('MyEntityService', () => {
  let service: MyEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyEntityService],
    }).compile();

    service = module.get<MyEntityService>(MyEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
