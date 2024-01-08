// database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTable } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserTable]),
  ],
})
export class DatabaseModule { }
