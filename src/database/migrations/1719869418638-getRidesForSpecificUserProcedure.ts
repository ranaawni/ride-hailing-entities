import { MigrationInterface, QueryRunner } from "typeorm";

export class GetRidesForSpecificUserProcedure1719869418638 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
         CREATE PROCEDURE GetRidesForUser(IN userId INT)
          BEGIN
             SELECT
                 id,
                 riderId,
                 driverId,
                 status,
                 source,
                 destination,
                 createdAt
            FROM
                ride 
            WHERE
                ride.riderId = userId
                OR ride.driverId = userId;
         END 
           
        `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
