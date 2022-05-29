import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private analytics: any = [];
  getHello(): string {
    return 'Hello World!';
  }
  handleUserCreated(data: {email: string}) {
    console.log(`analytics service --`, data)
    this.analytics.push({...data, time: new Date()})
  }

  getAnalytics() {
    return this.analytics;
  }
}
