import { Module } from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { TrainersController } from './trainers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trainer } from './trainers.entity';

@Module({
  providers: [TrainersService],
  controllers: [TrainersController],
  imports: [TypeOrmModule.forFeature([Trainer])],
  exports: [TrainersService]
})
export class TrainersModule {}
