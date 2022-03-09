import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Trainer {
    @PrimaryGeneratedColumn()
        id: number;
    
    @Column()
        firstName: string;

    @Column()
        lastName: string;

    @Column()
        level: string;

    @Column('simple-array')
        competencies: string[];

    @Column()
        needWheelchair: string;

    @Column()
        city: string;

    @Column()
        country: string;
}