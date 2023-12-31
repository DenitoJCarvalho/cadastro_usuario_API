import { Request, Response } from 'express';

export interface IAlternativa {
  cadastrar(request: Request, response: Response): Promise<any>;
  listar(request: Request, response: Response): Promise<any>;
  listarUmaAlternativa(request: Request, response: Response): Promise<any>;
  atualizar(request: Request, response: Response): Promise<any>;
  deletar(request: Request, response: Response): Promise<any>;
}