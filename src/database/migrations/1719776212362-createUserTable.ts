import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1719776212362 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE  IF NOT EXISTS user (
                id int not null primary key auto_increment,
                firstName varchar(20) NOT NULL,
                lastName varchar(20) NOT NULL,
                email varchar(50) NOT NULL,
                password varchar(150) NOT NULL,
                createdAt timestamp NOT NULL DEFAULT now()
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE "user";
    `);  
    }


}






         
        