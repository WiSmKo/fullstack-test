import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Booking {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    courseId: number;

    @Column()
    locationId: number;

    @Column()
    trainerId: number;

    @Column()
    studentIds: string;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column()
    mandatory: boolean;

    @Column()
    comments: string;

}