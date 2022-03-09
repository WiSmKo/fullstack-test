import { Body, Controller, Post } from '@nestjs/common';
import { Booking } from './bookings.entity';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {

    constructor (private bookingsService: BookingsService){}

    @Post()
    async createBooking(@Body() booking: Booking){
        return await this.bookingsService.createBooking(booking);
    }
}
