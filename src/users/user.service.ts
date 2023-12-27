import { Injectable } from '@nestjs/common';
import { User } from './data/user.dto';

@Injectable()
export class UserService {
  public user: User[] = [];
  addUser(user: User): string {
    console.log('user', user);
    this.user.push(user);
    return 'User added successfully';
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
