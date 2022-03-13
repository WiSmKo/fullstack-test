import { Body, Controller, Get, Logger, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingsDto } from './dto/create-bookings.dto';
import { CreateBookingPipe } from './validation/validation.pipe';

@Controller('bookings')
export class BookingsController {

    constructor (private bookingsService: BookingsService){}

    @Get()
    async getBookings(@Query() query) {
        // if(query. != null){
            // Logger.log(`Find by `);
            // return (await this.bookingsService.findAll()).filter(p => p. == query.);
        // }
        Logger.log(`Find all`);
        return await this.bookingsService.findAll()
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body(CreateBookingPipe) createBookingsDTO: CreateBookingsDto){ 
            return await this.bookingsService.createBooking(createBookingsDTO);   
    }
}
