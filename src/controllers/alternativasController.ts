import { Request, Response } from 'express';

import { Alternativas } from '../models/alternativasModel';

import { IAlternativa } from '../interfaces/IAlternativa';

export class Alternativa implements IAlternativa {

  constructor() { }

  async cadastrar(request: Request, response: Response): Promise<any> {

    try {
      const alternativa = await Alternativas
        .create({
          descricao: request.body.descricao,
          flag: request.body.flag
        })
        .then(res => {
          response.status(201).json({ msg: `Alternativa cadastrada com sucesso.` });
        })
        .catch(e => {
          if (e instanceof Error) {
            response.status(404).json({ msg: `Erro ao cadastrar alternativa. ${e.message}` });
          }
        });

    } catch (e) {
      if (e instanceof Error) {
        response.status(500).json({ msg: `Erro ao cadastrar alternativa. ${e.message}` })
      }
    }

  }

}