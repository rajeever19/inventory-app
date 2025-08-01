import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
// import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, AuthModule, PrismaModule],
  // providers: [PrismaService],
  // controllers: [AppController],// controllrer is user handle response and request
  // providers: [AppService],// service is business logic
})
export class AppModule {}
