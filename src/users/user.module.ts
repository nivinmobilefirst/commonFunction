import { Module } from '@nestjs/common';
import { JwtMiddleware } from '../jwt/jwt.middleware';
import { UserController } from '../users/user.controller';
import { UserService } from './user.service';
import { JwtService } from '../jwt/jwt.service';
import { JWTModule } from '../jwt/jwt.module';

@Module({
    imports: [JWTModule],
    controllers: [UserController],
    providers: [JwtMiddleware, UserService, JwtService],
})
export class UsersModule {}
