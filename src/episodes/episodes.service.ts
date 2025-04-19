import { Injectable } from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';

@Injectable()
export class EpisodesService {
  findAll() {
    return 'All Episodes';
  }

  findFeatured() {
    return 'All Featured Episodes';
  }

  findOne(id: string) {
    // console.log('findOne', id);
    return `Episode ${id}`;
  }

  create(createEpisodeDto: CreateEpisodeDto) {
    // return 'Episode created';
    return `This action adds a new episode: ${JSON.stringify(createEpisodeDto)}`;
  }

  update(id: string, updateEpisodeDto: UpdateEpisodeDto) {
    return `This action updates episode ${id} with data: ${JSON.stringify(updateEpisodeDto)}`;
  }

  remove(id: string) {
    return `This action removes episode with id ${id}`;
  }
}
