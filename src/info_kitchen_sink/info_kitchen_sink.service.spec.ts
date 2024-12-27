import { Test, TestingModule } from '@nestjs/testing';
import { InfoKitchenSinkService } from './info_kitchen_sink.service';

describe('InfoKitchenSinkService', () => {
  let service: InfoKitchenSinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfoKitchenSinkService],
    }).compile();

    service = module.get<InfoKitchenSinkService>(InfoKitchenSinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
