import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    topic: 'Frontend' | 'Backend' | 'Fullstack' | 'Cloud' | 'Security';

    @Column('int')
    level: number;

    @Column('int')
    duration: number;
}