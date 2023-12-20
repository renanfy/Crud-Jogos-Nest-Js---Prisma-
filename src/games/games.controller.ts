import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from 'src/dto/create-game-dto';
import { UpdateGameDto } from 'src/dto/update-game-dto';

@Controller('games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) { }

    // Rotas

    @Post('/create')
    create(@Body() createGameDto: CreateGameDto) {
        return this.gamesService.create(createGameDto);
    }

    @Get()
    findAll() {
        return this.gamesService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.gamesService.findById(id);
    }

    @Delete(':id')
    deleteById(@Param('id') id: string) {
        return this.gamesService.deleteById(id);
    }

    @Patch(':id')
    updateById(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
        return this.gamesService.updateById(id, updateGameDto);
    }
}
