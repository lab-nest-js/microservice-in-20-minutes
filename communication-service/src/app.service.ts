import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: {email: string}) {
    console.log(`handleUserCreated -- Communication service`, data);
  }
}
