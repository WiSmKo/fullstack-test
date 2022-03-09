import { Course } from "src/courses/course.entity";
import { Location } from "src/locations/locations.entity";
import { Trainer } from "src/trainers/trainers.entity";
import { Student } from "src/students/students.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Booking {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    courseId: string;

    @Column()
    locationId: string;

    @Column()
    trainerId: string;

    @Column()
    studentIds: string;

    @Column()
    startDate: string;

    @Column()
    endDate: string;

    @Column()
    mandatory: boolean;

    @Column()
    comments: string;

}