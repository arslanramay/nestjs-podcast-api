import { Injectable } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TopicEntity } from './entities/topic.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TopicsService {
  constructor(
    @InjectRepository(TopicEntity)
    private readonly topicRepo: Repository<TopicEntity>,
  ) {}

  findAll() {
    // return 'This action returns all topics';
    return this.topicRepo.find();
  }

  findOne(id: string) {
    // return `This action returns topic with id ${id}`;
    return this.topicRepo.findOne({ where: { id } });
  }

  create(createTopicDto: CreateTopicDto) {
    // return `This action adds a new topic: ${JSON.stringify(createTopicDto)}`;
    const topic = this.topicRepo.create(createTopicDto);
    return this.topicRepo.save(topic);
  }

  // update(id: string, updateTopicDto: UpdateTopicDto) {
  //   return `This action updates topic ${id} with data: ${JSON.stringify(updateTopicDto)}`;
  // }
  async update(id: string, updateTopicDto: UpdateTopicDto) {
    await this.topicRepo.update(id, updateTopicDto);
    return this.findOne(id);
  }

  // remove(id: string) {
  //   return `This action removes topic with id ${id}`;
  // }
  async remove(id: string) {
    const topic = await this.findOne(id);
    if (!topic) return null;
    await this.topicRepo.delete(id);
    return topic;
  }
}
