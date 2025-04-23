import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EpisodeEntity } from './entities/episode.entity';
import { TopicEntity } from 'src/topics/entities/topic.entity';

@Injectable()
export class EpisodesService {
  constructor(
    @InjectRepository(EpisodeEntity)
    private readonly episodeRepo: Repository<EpisodeEntity>,

    @InjectRepository(TopicEntity)
    private readonly topicRepo: Repository<TopicEntity>,
  ) {}

  findAll() {
    // return 'All Episodes';
    return this.episodeRepo.find(); // returns episodes with topic (eager)
  }

  findFeatured() {
    // return 'All Featured Episodes';
    return this.episodeRepo.find({ where: { published: true } });
  }

  findOne(id: string) {
    // return `Episode ${id}`;
    return this.episodeRepo.findOne({ where: { id } });
  }

  async create(dto: CreateEpisodeDto) {
    const topic = await this.topicRepo.findOne({ where: { id: dto.topicId } });
    if (!topic) throw new NotFoundException('Topic not found');

    const episode = this.episodeRepo.create({
      ...dto,
      topic,
    });

    return this.episodeRepo.save(episode);
  }

  async update(id: string, dto: UpdateEpisodeDto) {
    const episode = await this.findOne(id);
    if (!episode) throw new NotFoundException('Episode not found');

    if (dto.topicId) {
      const topic = await this.topicRepo.findOne({
        where: { id: dto.topicId },
      });
      if (!topic) throw new NotFoundException('Topic not found');
      episode.topic = topic;
    }

    Object.assign(episode, dto);
    return this.episodeRepo.save(episode);
  }

  // remove(id: string) {
  //   return `This action removes episode with id ${id}`;
  // }
  async remove(id: string) {
    const episode = await this.findOne(id);
    if (!episode) return null;
    await this.episodeRepo.delete(id);
    return episode;
  }
}
