import { Module } from '@nestjs/common';
import { UsersModule } from './users/user.module';
import { RootController } from './root.controller';
import { RootService } from './root.service';
import { JWTModule } from './jwt/jwt.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from "@nestjs/config";
import * as path from "path";
import { UserTable } from './database/entities/user.entity';

//   url: configService.get<string>('DATABASE_URL', 'postgres://postgres:postgres123@localhost:5432/commonfunction'),

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.resolve(__dirname, `../development.env`),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres', // Add this line
        url: configService.get<string>('DATABASE_URL', 'postgres://postgres:Comfun100@localhost:5432/commonFunction'),
        entities: [UserTable],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    JWTModule,
    DatabaseModule
  ],
  controllers: [RootController],
  providers: [RootService],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
