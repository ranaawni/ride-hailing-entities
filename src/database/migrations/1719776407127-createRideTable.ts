import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRideTable1719776407127 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE ride (
            id int not null primary key auto_increment,
            userId INT(30),
            driverId INT(30),
            status varchar(20) NOT NULL,
            source GEOMETRY,
            destination GEOMETRY,
            createdAt timestamp NOT NULL DEFAULT now(),
            CONSTRAINT FK_ride_user FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE,
            CONSTRAINT FK_ride_driver FOREIGN KEY (driverId) REFERENCES driver(id) ON DELETE CASCADE ON UPDATE CASCADE
        );
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE "ride";
    `);
    }

}
