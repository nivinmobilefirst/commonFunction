import { Module } from '@nestjs/common';
import { UsersModule } from './users/user.module';
import { RootController } from './root.controller';
import { RootService } from './root.service';
import { JWTModule } from './jwt/jwt.module';

import { ConfigModule, ConfigService } from "@nestjs/config";
import * as path from "path";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.resolve(__dirname, `../development.env`),
    }),
    UsersModule,
    JWTModule
  ],
  controllers: [RootController],
  providers: [RootService],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
