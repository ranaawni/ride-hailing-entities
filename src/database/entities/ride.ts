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

  @Column()
  source: string; // 'latitude,longitude'

  @Column()
  destination: string; // 'latitude,longitude'


  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  createdAt: Date;
}


