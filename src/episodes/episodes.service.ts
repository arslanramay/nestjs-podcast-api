import { Injectable } from '@nestjs/common';

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
}
