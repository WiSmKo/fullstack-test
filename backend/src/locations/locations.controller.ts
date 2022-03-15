import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
    constructor(
        private locationsService: LocationsService
    ) {
    }

    @Get()
    async getLocations(@Query() query) {
        if(query.city != null){
            Logger.log(`Find by ${query.city}`);
            return (await this.locationsService.findAll()).filter(p => p.city == query.city);
        }
        Logger.log(`Find all`);
        return await this.locationsService.findAll()
    }

    @Get('/cities')
    async getCities(){
        return await this.locationsService.findCities();
    }
}
