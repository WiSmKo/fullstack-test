import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './locations.entity'

@Injectable()
export class LocationsService {
    constructor(
        @InjectRepository(Location)
        private locationsRepository: Repository<Location>
    ){}

    async findAll(): Promise<Location[]> {
        return this.locationsRepository.find();
    }

    async findOne(id: number): Promise<Location> {
        return this.locationsRepository.findOne(id);
    }

}
