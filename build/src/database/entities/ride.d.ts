import { User } from './user';
export declare class Ride {
    id: number;
    rider: User;
    riderId: string;
    driver: User;
    driverId: string;
    status: string;
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
