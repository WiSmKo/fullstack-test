import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

}