import { Course } from "src/courses/course.entity";
import { Location } from "src/locations/locations.entity";
import { Trainer } from "src/trainers/trainers.entity";
import { Student } from "src/students/students.entity";
import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Booking {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    course: Course;

    @Column()
    location: Location;

    @Column()
    trainer: Trainer;

    @Column()
    students: Student;

    @Column()
    mandatory: boolean;

    @Column()
    comments: string;

}