import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EpisodesModule } from './episodes/episodes.module';
import { TopicsModule } from './topics/topics.module';
import { ConfigModule } from './config/config.module';
import { EpisodeEntity } from './episodes/entities/episode.entity';
import { TopicEntity } from './topics/entities/topic.entity';

@Module({
  imports: [
    ConfigModule,
    EpisodesModule,
    TopicsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'pgadmin', // 👈 your db user
      password: '123456789', // 👈 your db password
      database: 'podcastapidb', // 👈 your db name
      entities: [EpisodeEntity, TopicEntity],
      synchronize: true, // 👈 auto create tables (dev only)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
