import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              create: jest.fn().mockResolvedValue({
                id: 1,
                email: 'test@example.com',
                fullName: 'Test User',
              }),
              findUnique: jest.fn().mockResolvedValue(null), // Simulate "no user found"
            },
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should signup a user', async () => {
    const result = await service.signup({
      email: 'test@example.com',
      password: 'password123',
      fullName: 'Test User',
    });

    expect(result).toHaveProperty('message', 'Signup successful');
    expect(result).toHaveProperty('userId', 1);
  });
});
