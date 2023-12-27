// src/services/jwt.service.ts
import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  createToken(payload: any, options: any): string {
    try {
      const token = jwt.sign(payload, process.env.JWT_SECRET, options);
      return token;
    } catch (error) {
      throw new Error('Error creating JWT token');
    }
  }
  generateJwtToken(userId: string): string {
    const payload = { userId };
    const options = {
      expiresIn: '1h', // Adjust the expiration time as needed
    };

    return this.createToken(payload, options);
  }
}
