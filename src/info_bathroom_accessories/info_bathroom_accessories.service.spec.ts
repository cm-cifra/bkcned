import { Test, TestingModule } from '@nestjs/testing';
import { InfoBathroomAccessoriesService } from './info_bathroom_accessories.service';

describe('InfoBathroomAccessoriesService', () => {
  let service: InfoBathroomAccessoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfoBathroomAccessoriesService],
    }).compile();

    service = module.get<InfoBathroomAccessoriesService>(InfoBathroomAccessoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
