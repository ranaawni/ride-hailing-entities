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
    source: {
        type: 'Point';
        coordinates: [number, number];
    };
    destination: {
        type: 'Point';
        coordinates: [number, number];
    };
    createdAt: Date;
}
