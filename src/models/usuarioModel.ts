import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { Questoes } from './questoesModel';

@Entity()
export class Usuario {

  @PrimaryGeneratedColumn()
  usuario_id!: number;

  @Column({ length: 40, nullable: false })
  name!: string;

  @Column({ length: 40, nullable: false })
  email!: string;

  @Column({ length: 20, nullable: false })
  senha!: string

  @Column({ nullable: false })
  criadoEm!: Date;

  @Column({ default: 0 })
  status!: number;

  @OneToOne((type) => Questoes, (questoes) => questoes.questao_id)
  @JoinColumn()
  questoes!: Questoes

}