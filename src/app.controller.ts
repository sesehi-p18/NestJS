import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  @Render("hello")
  testIndex() {
    let theMessage = "Welcome to Twig!"
    let theWeek = ['monday', 'tuesday', 'wednesday',
    'thursday', 'friday']

    return {
    welcomeMessage: theMessage,
    week: theWeek
    }
  }
}
