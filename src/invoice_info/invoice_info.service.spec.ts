import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceInfoService } from './invoice_info.service';

describe('InvoiceInfoService', () => {
  let service: InvoiceInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvoiceInfoService],
    }).compile();

    service = module.get<InvoiceInfoService>(InvoiceInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
