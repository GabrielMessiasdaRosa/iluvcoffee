import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaSync1689237834742 implements MigrationInterface {
    name = 'SchemaSync1689237834742'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "bagdeColor" TO "bagde"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "bagde" TO "bagdeColor"`);
    }

}
