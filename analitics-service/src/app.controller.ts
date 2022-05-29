import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('user_created')
  handleUserCreated(user: {email: string}) {
    this.appService.handleUserCreated(user);
  }

  @MessagePattern({ cmd: 'get_analytics'})
  getAnalytics() {
    return this.appService.getAnalytics();
  }
}
