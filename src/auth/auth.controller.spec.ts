import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

describe('AuthController', () => {
  let controller: AuthController;
  let mockAuthService: Partial<AuthService>;

  beforeEach(async () => {
    // ✅ Mock implementation of AuthService
    mockAuthService = {
      signup: jest.fn().mockResolvedValue({
        id: 1,
        email: 'test@example.com',
        fullName: 'Test User',
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call authService.signup and return a user', async () => {
    const dto: AuthDto = {
      email: 'test@example.com',
      password: 'test123',
      fullName: 'Test User',
    };

    const result = await controller.signup(dto);

    expect(mockAuthService.signup).toHaveBeenCalledWith(dto);
    expect(result).toEqual({
      id: 1,
      email: 'test@example.com',
      fullName: 'Test User',
    });
  });
});
