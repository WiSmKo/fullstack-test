import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './bookings.entity';

@Module({
  providers: [BookingsService],
  controllers: [BookingsController],
  imports: [TypeOrmModule.forFeature([Booking])]
})
export class BookingsModule {}
