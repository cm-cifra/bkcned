import { Test, TestingModule } from '@nestjs/testing';
import { UserMenuService } from './user_menu.service';

describe('UserMenuService', () => {
  let service: UserMenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserMenuService],
    }).compile();

    service = module.get<UserMenuService>(UserMenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
