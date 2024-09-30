import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Cat, Dog } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('voting')
  getVoting(): Promise<{
    dogVoting: Dog;
    catVoting: Cat;
  }> {
    return this.appService.getVoting();
  }

  @Post('dog')
  voteDog(): Promise<{
    dogVoting: Dog;
    catVoting: Cat;
  }> {
    return this.appService.voteDog();
  }

  @Post('cat')
  voteCat(): Promise<{
    dogVoting: Dog;
    catVoting: Cat;
  }> {
    return this.appService.voteCat();
  }
}
