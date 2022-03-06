import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

}