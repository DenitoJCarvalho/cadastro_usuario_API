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

  async listar(request: Request, response: Response): Promise<any> {

    try {
      const alternativa = await Alternativas
        .findAll({
          attributes: ['alternativa_id', 'descricao', 'flag']
        })
        .then(res => {
          response.status(200).json({
            res,
            msg: `Alternativas listadas com sucesso.`
          })
        })
        .catch(e => {
          if (e instanceof Error) {
            response.status(404).json({ msg: `Alternativas não encontradas. ${e.message}` });
          }
        });
    } catch (e) {
      if (e instanceof Error) {
        response.status(500).json({ msg: `Não foi possível listar alternativas.` });
      }
    }
  }
}