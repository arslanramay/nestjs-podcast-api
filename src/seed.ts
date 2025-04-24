import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { TopicEntity } from './topics/entities/topic.entity';
import { EpisodeEntity } from './episodes/entities/episode.entity';
import { faker } from '@faker-js/faker';

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const dataSource = app.get(DataSource);

  const topicRepo = dataSource.getRepository(TopicEntity);
  const episodeRepo = dataSource.getRepository(EpisodeEntity);

  // 🔹 1. Generate 50 topics
  const topicNames = [
    'Tech',
    'Science',
    'Coding',
    'AI',
    'Startup',
    'Fitness',
    'Health',
    'Mindset',
    'Finance',
    'History',
  ];
  const topics: TopicEntity[] = [];

  for (let i = 0; i < 50; i++) {
    const name =
      faker.helpers.arrayElement(topicNames) + ' ' + faker.word.adjective();
    const description = faker.lorem.sentence();
    const topic = topicRepo.create({ name, description });
    topics.push(topic);
  }

  await topicRepo.save(topics);
  console.log(`✅ Created ${topics.length} topics`);

  // 🔹 2. Generate 250 episodes
  const episodes: EpisodeEntity[] = [];

  for (let i = 0; i < 250; i++) {
    const title = faker.company.catchPhrase();
    const description = faker.lorem.paragraph();
    const published = faker.datatype.boolean();
    const topic = faker.helpers.arrayElement(topics);

    const episode = episodeRepo.create({
      title,
      description,
      published,
      topic,
    });

    episodes.push(episode);
  }

  await episodeRepo.save(episodes);
  console.log(`✅ Created ${episodes.length} episodes`);

  await app.close();
  console.log('🌱 Seed complete');
}

seed();
