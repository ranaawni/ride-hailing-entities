import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDriverTable1719776277128 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE driver (
            id int not null primary key auto_increment,
            firstName varchar(20) NOT NULL,
            lastName varchar(20) NOT NULL,
            email varchar(50) NOT NULL,
            password varchar(150) NOT NULL,
            location GEOMETRY,
            createdAt timestamp NOT NULL DEFAULT now()
        );
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE "driver";
    `);
    }

}
