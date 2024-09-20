import { IsNumber, IsString } from 'class-validator';

export class EnvConfig {
  @IsString()
  APP_PORT: string;

  @IsString()
  DB_HOST: string;

  @IsNumber()
  DB_PORT: number;

  @IsString()
  DB_USER: string;

  @IsString()
  DB_PASSWORD: string;

  @IsString()
  DB_NAME: string;
}
