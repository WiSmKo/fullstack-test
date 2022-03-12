import { ArgumentMetadata, HttpException, HttpStatus, Injectable, Logger, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Trainer } from "src/trainers/trainers.entity";
import { Location } from "src/locations/locations.entity";
import { LocationsService } from 'src/locations/locations.service';
import { TrainersService } from 'src/trainers/trainers.service';
import { CoursesService } from "src/courses/courses.service";
import { CreateBookingsDto } from "../dto/create-bookings.dto";

@Injectable()
export class CreateBookingPipe implements PipeTransform{

    constructor (
        private trainersService: TrainersService,
        private locationsService: LocationsService,
        private coursesService: CoursesService
    ){}

    async transform(value: any, metaData: ArgumentMetadata){
        const { metatype } = metaData;
        Logger.log(await this.isNotAccessible(value.locationId, value.trainerId));
        if(await this.isNotAccessible(value.locationId, value.trainerId)){
            throw new HttpException(`Validation failed: Trainer requires wheelchair access`, HttpStatus.UNPROCESSABLE_ENTITY)
        }

        if( this.isEndingBeforeStart(value.startDate, value.endDate)){
            throw new HttpException(`Validation failed: The end date entered is before the start date`, HttpStatus.UNPROCESSABLE_ENTITY)
        }

        if(!await this.isTrainerQualified(value.trainerId, value.courseId)){
            throw new HttpException(`Validation failed: The trainer is not qualified to teach this course`, HttpStatus.UNPROCESSABLE_ENTITY)
        }

        return value;
    }

    private async isNotAccessible(locationId:number, trainerId:number): Promise<Boolean>{
        const location = await this.locationsService.findOne(locationId);
        const trainer = await this.trainersService.findOne(trainerId);
        if (trainer.needWheelchair === "True" && location.wheelchairAccessible === "False"){
            return true;
        }
        return false;
    }

    private async isTrainerQualified(trainerId:number, courseId:number): Promise<Boolean>{
        const trainer = await this.trainersService.findOne(trainerId);
        const course = await this.coursesService.findOne(courseId);
        const qualifiedTrainers: Trainer[] = await this.trainersService.findBy(course.topic);
        for (var i = 0; i < qualifiedTrainers.length; i++){
            if(trainer.id === qualifiedTrainers[i].id){
                return true
            }
        }
    }

    private isEndingBeforeStart(startDate: Date, endDate: Date): Boolean{
        if(endDate < startDate){
            return true;
        }

        return false;
    }
}