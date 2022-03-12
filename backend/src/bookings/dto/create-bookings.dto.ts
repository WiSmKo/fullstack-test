export class CreateBookingsDto {
    courseId: string;
    locationId: string;
    trainerId: string;
    studentIds: string;
    startDate: string;
    endDate: string;
    mandatory: boolean;
    comments: string;
}