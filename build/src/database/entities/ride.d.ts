import { User } from './user';
import { Driver } from './driver';
export declare class Ride {
    id: string;
    user: User;
    userId: string;
    driver: Driver;
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
