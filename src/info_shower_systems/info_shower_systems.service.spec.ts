import { Test, TestingModule } from '@nestjs/testing';
import { InfoShowerSystemsService } from './info_shower_systems.service';

describe('InfoShowerSystemsService', () => {
  let service: InfoShowerSystemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfoShowerSystemsService],
    }).compile();

    service = module.get<InfoShowerSystemsService>(InfoShowerSystemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
