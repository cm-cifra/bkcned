import { Test, TestingModule } from '@nestjs/testing';
import { InfoMirrorsService } from './info_mirrors.service';

describe('InfoMirrorsService', () => {
  let service: InfoMirrorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfoMirrorsService],
    }).compile();

    service = module.get<InfoMirrorsService>(InfoMirrorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
