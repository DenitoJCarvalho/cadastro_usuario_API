import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

import { Questoes } from './questoesModel';

@Entity()
export class Alternativas {

  @PrimaryGeneratedColumn()
  alternativa_id!: number;

  @Column({ length: 200, nullable: false })
  descircao!: string;

  @Column({ nullable: false, default: false })
  flag!: boolean;

  @OneToOne((type) => Questoes, (questoes) => questoes.questao_id)
  @JoinColumn()
  questoes!: Questoes;

}