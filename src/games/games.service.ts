import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateGameDto } from 'src/dto/create-game-dto';
import { UpdateGameDto } from 'src/dto/update-game-dto';

@Injectable()
export class GamesService {

    constructor(private readonly prisma: PrismaService) { }

    create(createGameDto: CreateGameDto) {
        return this.prisma.jogos.create({
            data: createGameDto,
        });
    }

    findAll() {
        return this.prisma.jogos.findMany()
    }

    deleteById(id: string) {
        return this.prisma.jogos.delete({
            where: {
                id: parseInt(id),
            }
        })
    }

    findById(id: string) {
        return this.prisma.jogos.findFirst({
            where: {
                id: parseInt(id),
            }
        })
    }

    updateById(id: string, updateGameDto: UpdateGameDto) {
        return this.prisma.jogos.update({
            where: {
                id: parseInt(id),
            },
            data: updateGameDto,
        });
    }


}
