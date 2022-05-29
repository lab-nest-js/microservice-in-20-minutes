import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './createUser.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/create-user')
  createUser(@Body() createUserDto:CreateUserDto) {
    this.appService.createUser(createUserDto);
  }

  @Get('/get-analytics')
  getAnalytics() {
    return this.appService.getAnalytics();
  }
}
