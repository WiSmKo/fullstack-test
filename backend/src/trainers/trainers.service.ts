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

    async findOne(id: number): Promise<Trainer> {
        return this.trainersRepository.findOne(id);
    }

    async findBy(course: string): Promise<Trainer[]>{
        return this.trainersRepository.find({ where: { competencies: Like(`%'${course}'%`) } });
    }

    async requiresWheelchairAccess(id: string): Promise<Boolean>{
        const trainer: Trainer = await this.trainersRepository.findOne(id);
        return Boolean(trainer.needWheelchair);
    }
}
