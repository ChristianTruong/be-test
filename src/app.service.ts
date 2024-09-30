import { Injectable } from '@nestjs/common';
import { Cat, Dog } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getVoting(): Promise<{
    dogVoting: Dog;
    catVoting: Cat;
  }> {
    const dogVoting = await this.prisma.dog.findFirst();
    const catVoting = await this.prisma.cat.findFirst();

    return {
      dogVoting,
      catVoting,
    };
  }

  async voteDog(): Promise<{
    dogVoting: Dog;
    catVoting: Cat;
  }> {
    const dogVoting = await this.prisma.dog.findFirst();
    if (!dogVoting) {
      await this.prisma.dog.create({
        data: {
          vote: 1,
        },
      });
    } else {
      await this.prisma.dog.update({
        where: { id: 1 },
        data: { vote: { increment: 1 } },
      });
    }

    return this.getVoting();
  }

  async voteCat(): Promise<{
    dogVoting: Dog;
    catVoting: Cat;
  }> {
    const catVoting = await this.prisma.cat.findFirst();
    if (!catVoting) {
      await this.prisma.cat.create({
        data: {
          vote: 1,
        },
      });
    } else {
      await this.prisma.cat.update({
        where: { id: 1 },
        data: { vote: { increment: 1 } },
      });
    }

    return this.getVoting();
  }
}
