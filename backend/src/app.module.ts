import {Logger, Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { Course } from "./courses/course.entity";
import { Trainer } from './trainers/trainers.entity';
import { Location } from './locations/locations.entity';
import { TrainersModule } from './trainers/trainers.module';
import { LocationsModule } from './locations/locations.module';
import * as path from "path";
import { Connection } from 'typeorm';
import { BookingsModule } from './bookings/bookings.module';
import { StudentsModule } from './students/students.module';

const databasePath = path.resolve(__dirname, '../../database.sqlite3')
Logger.log(`Loading database at: ${databasePath}`)


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: databasePath,
      logging: true,
      entities: [
       Course,
       Trainer,
       Location
      ],
      synchronize: true,
    }),
    CoursesModule,
    TrainersModule,
    LocationsModule,
    BookingsModule,
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection){}
}
