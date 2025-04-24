import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EpisodesModule } from './episodes/episodes.module';
import { TopicsModule } from './topics/topics.module';
import { ConfigModule } from './config/config.module';
import { EpisodeEntity } from './episodes/entities/episode.entity';
import { TopicEntity } from './topics/entities/topic.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [EpisodeEntity, TopicEntity],
      synchronize: true, // auto create tables (dev only)
    }),
    EpisodesModule,
    TopicsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
