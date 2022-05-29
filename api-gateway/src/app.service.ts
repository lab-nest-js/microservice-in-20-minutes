import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './createUser.dto';

@Injectable()
export class AppService {
  private users: CreateUserDto[] = [];

  constructor(@Inject('COMMUNICATION') private readonly communicationClient: ClientProxy, @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy) { }
  getHello(): string {
    return 'Hello World!';
  }

  createUser(user: CreateUserDto) {
    this.users.push(user);
    this.communicationClient.emit('user_created', { email: user.email });
    this.analyticsClient.emit('user_created', { email: user.email })
  }

  getAnalytics() {
    return this.analyticsClient.send({cmd: 'get_analytics'}, {})
  }
}
