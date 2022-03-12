import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { Course } from 'src/courses/course.entity';

@Controller('trainers')
export class TrainersController {

    constructor (private trainersService: TrainersService){};

    @Get()
    async getTrainers(@Query() query) {
        if(query.course != null){
            Logger.log(`Find by ${query.course}`);
            return await this.trainersService.findBy(query.course);
        }
        Logger.log(`Find all`);
        return await this.trainersService.findAll()
    }
}
