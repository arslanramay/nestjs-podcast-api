import { Injectable } from '@nestjs/common';

@Injectable()
export class TopicsService {
  findAll() {
    return 'All Topics';
  }

  findOne(id: string) {
    return `Topic ${id}`;
  }
}
