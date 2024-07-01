import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, BeforeInsert } from 'typeorm';
import { Ride } from './ride';
import * as bcrypt from 'bcrypt';


export enum UserRole {
  RIDER = "rider",
  DRIVER = "driver",
}
@Entity()
export class User {
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

  @Column({
    type: "enum",
    enum: UserRole,
  })
  role: UserRole;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  createdAt: Date;

  @OneToMany(() => Ride, (ride) => ride.rider)
    requestedRides: Ride[];

  @OneToMany(() => Ride, (ride) => ride.driver)
    acceptedRides: Ride[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}


