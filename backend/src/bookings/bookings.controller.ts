import { Body, Controller, HttpException, HttpStatus, Logger, Post } from '@nestjs/common';
import { Booking } from './entities/bookings.entity';
import { BookingsService } from './bookings.service';
import { CreateBookingsDto } from './dto/create-bookings.dto';

@Controller('bookings')
export class BookingsController {

    constructor (private bookingsService: BookingsService){}

    @Post()
    async create(@Body() createBookingsDTO: CreateBookingsDto){
        try {
            if(await this.bookingsService.isBookable(createBookingsDTO) === false){
                throw new HttpException({
                    status: HttpStatus.UNPROCESSABLE_ENTITY,
                    error: 'This booking cannot be created because the conditions are not met'
                }, HttpStatus.UNPROCESSABLE_ENTITY);
            }           
            return await this.bookingsService.createBooking(createBookingsDTO);
        } catch(e){        
            Logger.error(`Unable to create booking: ${e.status} ${e}`);
            return e;
        }
        
    }
}
