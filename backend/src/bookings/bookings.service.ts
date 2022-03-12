import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoursesService } from 'src/courses/courses.service';
import { LocationsService } from 'src/locations/locations.service';
import { TrainersService } from 'src/trainers/trainers.service';
import { Repository } from 'typeorm';
import { CreateBookingsDto } from './dto/create-bookings.dto';
import { Booking } from './entities/bookings.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class BookingsService {

    constructor(
        @InjectRepository(Booking)
        private bookingRepository: Repository<Booking>,
        private trainersService: TrainersService,
        private locationsService: LocationsService
    ){}

    async createBooking(booking : CreateBookingsDto) : Promise<Booking> {
        return this.bookingRepository.save(booking);            
    } 

    async isBookable(booking : CreateBookingsDto) : Promise<Boolean>{
        const location = await this.locationsService.findOne(booking.locationId);
        const trainer = await this.trainersService.findOne(booking.trainerId);

        return ((trainer.needWheelchair && location.wheelchairAccessible) === 'True');  
    }
}
