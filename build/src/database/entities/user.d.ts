import { Ride } from './ride';
export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date;
    rides: Ride[];
    hashPassword(): Promise<void>;
}
