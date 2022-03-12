import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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
