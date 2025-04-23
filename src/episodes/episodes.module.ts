import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { EpisodesController } from './episodes.controller';
import { EpisodesService } from './episodes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpisodeEntity } from './entities/episode.entity';
import { TopicEntity } from 'src/topics/entities/topic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EpisodeEntity, TopicEntity])],
  controllers: [EpisodesController],
  providers: [EpisodesService],
})
export class EpisodesModule {}
