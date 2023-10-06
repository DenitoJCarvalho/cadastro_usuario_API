import { Request, Response } from 'express';

import { database } from '../database/typeorm';

import { IUser } from '../interfaces/IUser';



export class Usuario implements IUser {

  constructor() { }

  cadastrar(): string {
    return `Usuário cadastrado com sucesso.`
  }


}