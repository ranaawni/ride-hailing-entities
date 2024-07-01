import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './user';

export enum RideStatus {
  REQUESTED = "requested",
  ACCEPTED = "accepted",
}

@Entity()
export class Ride {
  @PrimaryGeneratedColumn({
        type: "int",
        name: "id",
      })
      id: number;

  @ManyToOne(() => User, user => user.requestedRides)
  rider: User;

  @Column()
  riderId: number;

  @ManyToOne(() => User, user => user.acceptedRides)
  driver: User;

  @Column()
  driverId: number;


  @Column({
    type: "enum",
    enum: RideStatus,
  })
  status: RideStatus;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    srid: 4326,
    transformer: {
      to: (value: { type: string, coordinates: number[] }) => `ST_GeomFromText('POINT(${value.coordinates[0]} ${value.coordinates[1]})', 4326)`,
      from: (value: string) => value,
    }
  })
  source: { type: 'Point', coordinates: [number, number] };

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    srid: 4326,
    transformer: {
      to: (value: { type: string, coordinates: number[] }) => `ST_GeomFromText('POINT(${value.coordinates[0]} ${value.coordinates[1]})', 4326)`,
      from: (value: string) => value,
    }
  })
  destination: { type: 'Point', coordinates: [number, number] };

  
  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  createdAt: Date;
}
