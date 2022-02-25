import {Injectable, Logger} from '@nestjs/common';
import {Repository} from "typeorm";
import {Course} from "./course.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course)
        private courseRepository: Repository<Course>,
    ){}

    async findAll(): Promise<Course[]> {
        return this.courseRepository.find();
    }

    findOne(id: string): Promise<Course> {
        return this.courseRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.courseRepository.delete(id);
    }

}
