import { TopicEntity } from '../../topics/entities/topic.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class EpisodeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: false })
  published: boolean;

  @ManyToOne(() => TopicEntity, (topic) => topic.episodes, { eager: true })
  topic: TopicEntity;
}
