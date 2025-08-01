import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UserModule, AuthModule],
  providers: [PrismaService],
  // controllers: [AppController],// controllrer is user handle response and request
  // providers: [AppService],// service is business logic
})
export class AppModule {}
