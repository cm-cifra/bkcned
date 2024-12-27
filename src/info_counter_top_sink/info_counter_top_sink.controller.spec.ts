import { Test, TestingModule } from '@nestjs/testing';
import { InfoCounterTopSinkController } from './info_counter_top_sink.controller';

describe('InfoCounterTopSinkController', () => {
  let controller: InfoCounterTopSinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoCounterTopSinkController],
    }).compile();

    controller = module.get<InfoCounterTopSinkController>(InfoCounterTopSinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
