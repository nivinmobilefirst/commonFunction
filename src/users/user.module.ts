import { Module } from '@nestjs/common';
import { JwtMiddleware } from '../jwt/jwt.middleware';
import { UserController } from '../users/user.controller';
import { UserService } from './user.service';
import { JwtService } from '../jwt/jwt.service';
import { JWTModule } from '../jwt/jwt.module';
import { UserTable } from '../database/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [JWTModule, TypeOrmModule.forFeature([UserTable])],
    controllers: [UserController],
    providers: [JwtMiddleware, UserService, JwtService],
})
export class UsersModule {}
