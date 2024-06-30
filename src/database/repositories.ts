import { AppDataSource } from "../../ormconfig";
import {Driver} from "./entities/driver"
import { User } from "./entities/user"
import { Ride } from "./entities/ride"

export const DriverRepository = AppDataSource.getRepository(Driver)
export const UserRepository = AppDataSource.getRepository(User)
export const RideRepository = AppDataSource.getRepository(Ride)