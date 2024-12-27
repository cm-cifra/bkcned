import { Test, TestingModule } from '@nestjs/testing';
import { InfoMirrorCabinetsService } from './info_mirror_cabinets.service';

describe('InfoMirrorCabinetsService', () => {
  let service: InfoMirrorCabinetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfoMirrorCabinetsService],
    }).compile();

    service = module.get<InfoMirrorCabinetsService>(InfoMirrorCabinetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
