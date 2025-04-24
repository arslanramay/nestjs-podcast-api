import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    // Replace with actual user DB logic
    const mockUser = {
      id: '1',
      email: 'arslan@gmail.com',
      password: await bcrypt.hash('password', 10),
    };

    const isValid = await bcrypt.compare(password, mockUser.password);
    if (mockUser && isValid) {
      const { password, ...result } = mockUser;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
