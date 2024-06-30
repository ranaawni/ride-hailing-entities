import { Ride } from './ride';
export declare class Driver {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    location: {
        type: 'Point';
        coordinates: [number, number];
    };
    createdAt: Date;
    rides: Ride[];
    hashPassword(): Promise<void>;
}
