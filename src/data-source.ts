import { DataSource } from 'typeorm';
import { ConfigService } from './config/config.service';
import { join } from 'path';

ConfigService.Init();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [join(__dirname, '/**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, '../migrations/*{.ts,.js}')],
});
