import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './entities/bookings.entity';
import { CoursesModule } from 'src/courses/courses.module';
import { TrainersModule } from 'src/trainers/trainers.module';
import { LocationsModule } from 'src/locations/locations.module';

@Module({
  providers: [BookingsService],
  controllers: [BookingsController],
  imports: [TypeOrmModule.forFeature([Booking]), CoursesModule, TrainersModule, LocationsModule]
})
export class BookingsModule {}
