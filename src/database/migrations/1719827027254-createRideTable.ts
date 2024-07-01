import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRideTable1719827027254 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS ride (
            id int not null primary key auto_increment,
            riderId INT(30),
            driverId INT(30),
            status enum('requested', 'accepted') NOT NULL,
            source varchar(50) NOT NULL,
            destination varchar(50),
            createdAt timestamp NOT NULL DEFAULT now(),
            KEY IDX_RIDE_RIDER (riderId),
            KEY IDX_RIDE_DRIVER (driverId),
            CONSTRAINT FK_ride_user FOREIGN KEY (riderId) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE,
            CONSTRAINT FK_ride_driver FOREIGN KEY (driverId) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE
        );
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE ride;
    `); 
    }

}
