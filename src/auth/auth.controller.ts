import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() body: { email: string; password: string; fullName: string }) {
    console.log('body', body);
    // return this.authService.signup(body.email, body.password, body.fullName);
  }
}
