import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EpisodesModule } from './episodes/episodes.module';
import { TopicsModule } from './topics/topics.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    ConfigModule,
    EpisodesModule,
    TopicsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // 👈 your db user
      password: 'password', // 👈 your db password
      database: 'podcastdb', // 👈 your db name
      entities: [Episode, Topic],
      synchronize: true, // 👈 auto create tables (dev only)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
