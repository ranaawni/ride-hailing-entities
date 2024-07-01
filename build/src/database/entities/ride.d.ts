import { User } from './user';
export declare enum RideStatus {
    REQUESTED = "requested",
    ACCEPTED = "accepted"
}
export declare class Ride {
    id: number;
    rider: User;
    riderId: number;
    driver: User;
    driverId: number;
    status: RideStatus;
    source: string;
    destination: string;
    createdAt: Date;
}
