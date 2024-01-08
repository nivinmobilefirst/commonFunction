import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './data/user.dto';
import { UserTable } from '../database/entities/user.entity';

@Injectable()
export class UserService {
  public user: User[] = [];
  constructor(
    @InjectRepository(UserTable)
    private readonly userRepository: Repository<UserTable>,
  ) { }
  addUser(user: User): any {
    console.log('user', user);
    const userObj = new UserTable();
    userObj.name = user.name;
    userObj.email = user.email;
    return this.userRepository.save(userObj);
  }

  updateUser(user: User): string {
    const index = this.user.findIndex(
      (currentUser) => currentUser.id === user.id,
    );
    this.user[index] = user;
    return `User updated successfully`;
  }

  getUser(): Array<User> {
    return this.user;
  }

  deleteUser(userId: number): string {
    this.user = this.user.filter((user) => user.id != userId);
    return `user deleted successfully`;
  }
}
