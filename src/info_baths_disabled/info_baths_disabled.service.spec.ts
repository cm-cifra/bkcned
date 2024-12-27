import { Test, TestingModule } from '@nestjs/testing';
import { InfoBathsDisabledService } from './info_baths_disabled.service';

describe('InfoBathsDisabledService', () => {
  let service: InfoBathsDisabledService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfoBathsDisabledService],
    }).compile();

    service = module.get<InfoBathsDisabledService>(InfoBathsDisabledService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
