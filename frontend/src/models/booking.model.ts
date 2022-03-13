export interface Booking {
    id: number;
    courseId: number;
    locationId: number;
    trainerId: number;
    studentIds: string;
    startDate: Date;
    endDate: Date;
    mandatory: boolean;
    comments: string;
}
