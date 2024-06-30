import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './user';
import { Driver } from './driver';

@Entity()
export class Ride {
  @PrimaryGeneratedColumn({
        type: "int",
        name: "id",
      })
      id: number;

  @ManyToOne(() => User, user => user.rides)
  user: User;

  @Column()
  userId: string;

  @ManyToOne(() => Driver, driver => driver.rides)
  driver: Driver;

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
