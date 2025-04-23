import { Injectable } from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EpisodeEntity } from './entities/episode.entity';
import { Repository } from 'typeorm';
import { TopicEntity } from 'src/topics/entities/topic.entity';

@Injectable()
export class EpisodesService {
  constructor(
    @InjectRepository(EpisodeEntity)
    private readonly episodeRepo: Repository<EpisodeEntity>,

    // @InjectRepository(TopicEntity)
    // private readonly topicRepo: Repository<TopicEntity>,
  ) {}

  findAll() {
    // return 'All Episodes';
    return this.episodeRepo.find();
  }

  findFeatured() {
    // return 'All Featured Episodes';
    return this.episodeRepo.find({ where: { published: true } });
  }

  findOne(id: string) {
    // return `Episode ${id}`;
    return this.episodeRepo.findOne({ where: { id } });
  }

  create(createEpisodeDto: CreateEpisodeDto) {
    // return `This action adds a new episode: ${JSON.stringify(createEpisodeDto)}`;
    const episode = this.episodeRepo.create(createEpisodeDto);
    return this.episodeRepo.save(episode);
  }

  // update(id: string, updateEpisodeDto: UpdateEpisodeDto) {
  //   return `This action updates episode ${id} with data: ${JSON.stringify(updateEpisodeDto)}`;
  // }
  async update(id: string, updateEpisodeDto: UpdateEpisodeDto) {
    await this.episodeRepo.update(id, updateEpisodeDto);
    return this.findOne(id);
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
