import {Controller, Get, Param} from '@nestjs/common';
import {CoursesService} from "./courses.service";

@Controller('courses')
export class CoursesController {
    constructor(
        private coursesService: CoursesService
    ) {
    }

    @Get()
    getAllCourses() {
        return this.coursesService.findAll()
    }

    @Get(':id')
    getCourse(@Param('id') id: number) {
        console.log(id);
        return this.coursesService.findOne(id);
    }
}
