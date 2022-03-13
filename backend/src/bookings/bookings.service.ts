import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationsService } from 'src/locations/locations.service';
import { TrainersService } from 'src/trainers/trainers.service';
import { Repository } from 'typeorm';
import { CreateBookingsDto } from './dto/create-bookings.dto';
import { Booking } from './entities/bookings.entity';

@Injectable()
export class BookingsService {

    constructor(
        @InjectRepository(Booking)
        private bookingRepository: Repository<Booking>,
    ){}

    async findAll(): Promise<Booking[]> {
        return this.bookingRepository.find();
    }

    async createBooking(booking : CreateBookingsDto) : Promise<Booking> {
        return this.bookingRepository.save(booking);            
    } 

}
