import { Test, TestingModule } from '@nestjs/testing';
import { InfoPedestalsService } from './info_pedestals.service';

describe('InfoPedestalsService', () => {
  let service: InfoPedestalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfoPedestalsService],
    }).compile();

    service = module.get<InfoPedestalsService>(InfoPedestalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
