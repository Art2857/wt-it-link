import { Injectable } from '@nestjs/common';
import { EnvConfig } from './config.env';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { config } from 'dotenv';

@Injectable()
export class ConfigService {
  readonly env: EnvConfig;

  static Init(path = '.env') {
    config({ path });

    return this.validateConfig(process.env);
  }

  Init(path: string) {
    Object.entries(ConfigService.Init(path)).forEach(([key, value]) => {
      this.env[key] = value;
    });

    Object.freeze(this.env);
  }

  static validateConfig(config: Record<string, any>) {
    const validatedConfig = plainToInstance(EnvConfig, config, {
      enableImplicitConversion: true,
    });

    const errors = validateSync(validatedConfig, {
      skipMissingProperties: false,
    });

    if (errors.length > 0) {
      throw new Error(`Config validation error: ${errors.toString()}`);
    }

    return validatedConfig;
  }
}
