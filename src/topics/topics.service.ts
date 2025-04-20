import { Injectable } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';

@Injectable()
export class TopicsService {
  findAll() {
    return 'This action returns all topics';
  }

  findOne(id: string) {
    return `This action returns topic with id ${id}`;
  }

  create(createTopicDto: CreateTopicDto) {
    return `This action adds a new topic: ${JSON.stringify(createTopicDto)}`;
  }

  update(id: string, updateTopicDto: UpdateTopicDto) {
    return `This action updates topic ${id} with data: ${JSON.stringify(updateTopicDto)}`;
  }

  remove(id: string) {
    return `This action removes topic with id ${id}`;
  }
}
