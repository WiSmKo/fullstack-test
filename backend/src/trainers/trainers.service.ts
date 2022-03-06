import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/courses/course.entity';
import { Like, Repository } from 'typeorm';
import { Trainer } from './trainers.entity';

@Injectable()
export class TrainersService {
    constructor(
        @InjectRepository(Trainer)
        private trainersRepository: Repository<Trainer>
    ){}

    async findBy(course:String): Promise<Trainer[]>{
        return this.trainersRepository.find({ where: { competencies: Like(`%'${course}'%`) } });
    }
}
