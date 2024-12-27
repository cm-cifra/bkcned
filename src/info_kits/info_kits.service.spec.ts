import { Test, TestingModule } from '@nestjs/testing';
import { InfoKitsService } from './info_kits.service';

describe('InfoKitsService', () => {
  let service: InfoKitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfoKitsService],
    }).compile();

    service = module.get<InfoKitsService>(InfoKitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
