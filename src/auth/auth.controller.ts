import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() body: AuthDto) {
    console.log('body', body);
    return this.authService.signup(body);
    // return this.authService.signup(body.email, body.password, body.fullName);
  }
}
