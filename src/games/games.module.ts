import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [GamesController],
  providers: [GamesService, PrismaService]
})
export class GamesModule { }
