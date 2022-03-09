import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './bookings.entity';

@Injectable()
export class BookingsService {

    constructor(
        @InjectRepository(Booking)
        private bookingRepository: Repository<Booking>
    ){}

    async createBooking(booking : Booking) : Promise<Booking> {
        console.log(booking.id);
        this.bookingRepository.save(booking);
        return 
    } 
}
