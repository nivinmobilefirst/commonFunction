import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { JwtMiddleware } from './jwt.middleware';
import { JwtService } from './jwt.service';

@Module({
  providers: [JwtService],
})
export class JWTModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes(
      { path: '/user/add', method: RequestMethod.POST },
      { path: '/user/getUsers', method: RequestMethod.GET },
      { path: '/user/updateUser', method: RequestMethod.PATCH },
      { path: '/user/deleteUserById/:id', method: RequestMethod.DELETE },
    );
  }
}
