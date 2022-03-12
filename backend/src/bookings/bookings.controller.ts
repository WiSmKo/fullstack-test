import { Body, Controller, HttpException, HttpStatus, Logger, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Booking } from './entities/bookings.entity';
import { BookingsService } from './bookings.service';
import { CreateBookingsDto } from './dto/create-bookings.dto';
import { CreateBookingPipe } from './validation/validation.pipe';

@Controller('bookings')
export class BookingsController {

    constructor (private bookingsService: BookingsService){}

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body(CreateBookingPipe) createBookingsDTO: CreateBookingsDto){ 
            return await this.bookingsService.createBooking(createBookingsDTO);   
    }
}
