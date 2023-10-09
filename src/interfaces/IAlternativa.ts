import { Request, Response } from 'express';

export interface IAlternativa {
  cadastrar(request: Request, response: Response): Promise<any>;
}