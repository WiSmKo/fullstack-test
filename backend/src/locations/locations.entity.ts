import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class Location {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    city: string;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

    @Column()
    wheelchairAccessible: string;

    @Column()
    country: string;
}