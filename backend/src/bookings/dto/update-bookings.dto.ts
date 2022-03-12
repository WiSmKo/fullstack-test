import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingsDto } from './create-bookings.dto';

export class UpdateBookings2Dto extends PartialType(CreateBookingsDto) {}