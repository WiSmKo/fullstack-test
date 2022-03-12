import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsDate, IsInt, IsNotEmpty } from "class-validator";
export class CreateBookingsDto {
    @IsInt()
    @IsNotEmpty()
    courseId: number;

    @IsInt()
    @IsNotEmpty()
    locationId: number;

    @IsInt()
    @IsNotEmpty()
    trainerId: number;

    @IsArray()
    @IsNotEmpty()
    studentIds: string;

    @Type(() => Date)
    @IsDate()
    @IsNotEmpty()
    startDate: Date;

    @Type(() => Date)
    @IsDate()
    @IsNotEmpty()
    endDate: Date;

    @IsBoolean()
    @IsNotEmpty()
    mandatory: boolean;

    comments: string;
}