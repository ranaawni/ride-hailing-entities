import { Ride } from './ride';
export declare enum UserRole {
    RIDER = "rider",
    DRIVER = "driver"
}
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: UserRole;
    createdAt: Date;
    requestedRides: Ride[];
    acceptedRides: Ride[];
    hashPassword(): Promise<void>;
}
