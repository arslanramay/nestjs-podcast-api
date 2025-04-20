import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  get(key: string): string {
    // Dummy config logic (you can later connect to env vars, etc.)
    const configs = {
      APP_NAME: 'Podcast API',
      APP_VERSION: '1.0.0',
    };
    return configs[key];
  }
}
