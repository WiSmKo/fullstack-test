import { Controller, Get, Param, Query } from '@nestjs/common';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
    constructor(
        private locationsService: LocationsService
    ) {
    }

    @Get()
    getAllLocations() {
        return this.locationsService.findAll()
    }

    @Get('/findBy/?')
    async getLocationsBy(@Query('city') city: string){
        return this.locationsService.findBy(city);
    }
}
