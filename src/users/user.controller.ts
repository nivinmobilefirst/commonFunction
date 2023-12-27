import {
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Param,
  Body,
  UseGuards,
  Req
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './data/user.dto';
import { JwtMiddleware, AuthenticatedRequest  } from '../jwt/jwt.middleware';
import { JwtService } from '../jwt/jwt.service';

@Controller(`user`)
export class UserController {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  @Post(`/add`)
  @UseGuards(JwtMiddleware)
  addUser(@Req() req: AuthenticatedRequest, @Body() user: User): string {
    console.log('getAuthenticatedUser', req.user);
    return this.userService.addUser(user);
  }
  @Post('generate-token')
  generateToken() {
    const userId = '123456'; // Replace with the actual user ID
    const token = this.jwtService.generateJwtToken(userId);
    return { token };
  }
  @Get(`/getUsers`)
  @UseGuards(JwtMiddleware)
  getUser(): Array<User> {
    return this.userService.getUser();
  }

  @Patch(`/updateUser`)
  @UseGuards(JwtMiddleware)
  updateUser(@Body() user: User): string {
    return this.userService.updateUser(user);
  }

  @Delete(`/deleteUserById/:id`)
  @UseGuards(JwtMiddleware)
  deleteUser(@Param() params): string {
    return this.userService.deleteUser(params.id);
  }
}
