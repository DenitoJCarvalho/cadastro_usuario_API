import { Request, Response } from 'express';

import { database } from '../database/typeorm';

import { IUser } from '../interfaces/IUser';



export class Usuario implements IUser {

  private db: any = database;

  constructor() { }

  cadastrar(): string { }


}