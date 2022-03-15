export interface Booking {
    id: number;
    courseId: number;
    locationId: number;
    trainerId: number;
    studentIds: string;
    startDate: string;
    endDate: string;
    mandatory: number;
    comments: string;
}
