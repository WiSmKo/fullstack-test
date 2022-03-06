import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as coursesJSON from '../initial data/courses.json'
import {CoursesService} from "./courses/courses.service";
import {Course} from "./courses/course.entity";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly coursesService: CoursesService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('loadData')
  async loadData() {
    // TODO load data from JSON file to database
  }

}
