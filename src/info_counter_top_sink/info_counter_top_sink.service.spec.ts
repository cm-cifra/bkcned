import { Test, TestingModule } from '@nestjs/testing';
import { InfoCounterTopSinkService } from './info_counter_top_sink.service';

describe('InfoCounterTopSinkService', () => {
  let service: InfoCounterTopSinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfoCounterTopSinkService],
    }).compile();

    service = module.get<InfoCounterTopSinkService>(InfoCounterTopSinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
