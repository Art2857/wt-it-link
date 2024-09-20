import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateColorsTable1726856552490 implements MigrationInterface {
  name = 'CreateColorsTable1726856552490';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "v_color" ("id" SERIAL NOT NULL, "c_name" character varying NOT NULL, "c_hex" character varying NOT NULL, "c_rgb" character varying NOT NULL, CONSTRAINT "PK_bb0d00c9c430922077aab225456" PRIMARY KEY ("id"))`,
    );

    await queryRunner.query(
      `INSERT INTO "v_color" ("id", "c_name", "c_hex", "c_rgb") VALUES (1, 'Yellow', '#FFFF00', 'rgb(255, 255, 0)')`,
    );

    await queryRunner.query(
      `INSERT INTO "v_color" ("id", "c_name", "c_hex", "c_rgb") VALUES (2, 'Red', '#FF0000', 'rgb(255, 0, 0)')`,
    );

    await queryRunner.query(
      `INSERT INTO "v_color" ("id", "c_name", "c_hex", "c_rgb") VALUES (3, 'Green', '#00FF00', 'rgb(0, 255, 0)')`,
    );

    await queryRunner.query(
      `INSERT INTO "v_color" ("id", "c_name", "c_hex", "c_rgb") VALUES (4, 'Blue', '#0000FF', 'rgb(0, 0, 255)')`,
    );

    await queryRunner.query(
      `INSERT INTO "v_color" ("id", "c_name", "c_hex", "c_rgb") VALUES (5, 'Black', '#000000', 'rgb(0, 0, 0)')`,
    );

    await queryRunner.query(
      `INSERT INTO "v_color" ("id", "c_name", "c_hex", "c_rgb") VALUES (6, 'White', '#FFFFFF', 'rgb(255, 255, 255)')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "v_color"`);
  }
}
