import { Controller, Get, Param, Query } from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { Course } from 'src/courses/course.entity';

@Controller('trainers')
export class TrainersController {

    constructor (private trainersService: TrainersService){};

    @Get('/findBy/?')
    async getTrainersBy(@Query('course') course: string){
        return this.trainersService.findBy(course);
    }
}
