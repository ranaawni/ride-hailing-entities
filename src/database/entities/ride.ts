import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './user';

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
  riderId: string;

  @ManyToOne(() => User, user => user.acceptedRides)
  driver: User;

  @Column()
  driverId: string;

  @Column()
  status: string;

  @Column('geometry', { spatialFeatureType: 'Point', srid: 4326 })
  source: { type: 'Point', coordinates: [number, number] };

  @Column('geometry', { spatialFeatureType: 'Point', srid: 4326 })
  destination: { type: 'Point', coordinates: [number, number] };

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  createdAt: Date;
}
