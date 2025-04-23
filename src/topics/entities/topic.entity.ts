import { EpisodeEntity } from 'src/episodes/entities/episode.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class TopicEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => EpisodeEntity, (episode) => episode.topic)
  episodes: EpisodeEntity[];
}
