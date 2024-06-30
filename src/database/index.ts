import { AppDataSource } from "../../ormconfig";

const initializeDB = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
    console.log("Database successfully initialized");
  } catch (err) {
    console.log(`Database failed to connect ${err}`);
  }
};

export default initializeDB;
