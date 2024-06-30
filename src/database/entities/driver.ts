import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, BeforeInsert } from 'typeorm';
import { Ride } from './ride';
import * as bcrypt from 'bcrypt';

@Entity()
export class Driver {
  @PrimaryGeneratedColumn({
        type: "int",
        name: "id",
      })
      id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column('geometry', { spatialFeatureType: 'Point', srid: 4326 })
  location: { type: 'Point', coordinates: [number, number] };

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  createdAt: Date;

  @OneToMany(() => Ride, ride => ride.driver)
  rides: Ride[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}