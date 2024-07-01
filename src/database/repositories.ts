import { AppDataSource } from "../../ormconfig";
import { User } from "./entities/user"
import { Ride } from "./entities/ride"

export const UserRepository = AppDataSource.getRepository(User)
export const RideRepository = AppDataSource.getRepository(Ride)