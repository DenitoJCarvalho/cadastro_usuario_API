import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { Questoes } from './questoesModel';

import { IUser } from '../interfaces/IUser';

@Entity()
export class Usuario implements IUser {

  @PrimaryGeneratedColumn()
  usuario_id!: number;

  @Column({ length: 40, nullable: false })
  nome!: string;

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