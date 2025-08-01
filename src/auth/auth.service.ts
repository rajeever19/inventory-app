import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signin() {
    return 'signin';
  }
  async signup(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (user) {
      throw new ConflictException('User already exists');
    }
    const newUser = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: dto.password,
        fullName: dto.fullName,
      },
    });

    return {
      message: 'Signup successful',
      userId: newUser.id,
    };
  }
}
