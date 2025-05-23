import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();
// console.log('✅ Loaded ENV:', process.env.APP_PORT);
console.log('✅ APP_PORT =', process.env.APP_PORT);
console.log('✅ PGHOST =', process.env.PGHOST);
console.log('✅ PGDATABASE =', process.env.PGDATABASE);
console.log('✅ DB_DATABASE =', process.env.DB_DATABASE);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // await app.listen(process.env.PORT ?? 3000);
  const port = process.env.APP_PORT || 3000;
  await app.listen(port, '0.0.0.0');

  console.log(`🚀 Server running at http://localhost:${port}`);
}
bootstrap();
