import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, JoinTable } from 'typeorm';

import { Usuario } from './usuarioModel';
import { Alternativas } from './alternativasModel';

@Entity()
export class Questoes {

  @PrimaryGeneratedColumn()
  questao_id!: number;

  @Column({ length: 100, nullable: false })
  descircao!: string;

  @Column({ length: 20, nullable: false })
  materia!: string;

  @Column({ nullable: false })
  professor!: number;

  @Column({ nullable: false })
  alternativa_id!: number;

  @ManyToMany((type) => Usuario, (user) => user.usuario_id)
  @JoinTable()
  user!: Usuario[];

  @ManyToMany((type) => Alternativas, (alternatives) => alternatives.alternativa_id)
  @JoinTable()
  alternatives!: Alternativas;
}