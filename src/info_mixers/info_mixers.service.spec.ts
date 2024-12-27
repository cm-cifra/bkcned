import { Test, TestingModule } from '@nestjs/testing';
import { InfoMixersService } from './info_mixers.service';

describe('InfoMixersService', () => {
  let service: InfoMixersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfoMixersService],
    }).compile();

    service = module.get<InfoMixersService>(InfoMixersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
