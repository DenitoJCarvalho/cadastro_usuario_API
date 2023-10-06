import { Request, Response } from 'express';

import { database } from '../database/sequelize';

import { Usuario } from '../models/usuarioModel'


export const cadastrarUsuario = async (request: Request, response: Response) => {

  try {
    const user = await Usuario
      .create({
        nome: request.body.nome,
        email: request.body.email,
        senha: request.body.senha,
        criadoEm: Date.now(),
        status: 0
      }, {
        fields: ['nome', 'email', 'senha', 'criadoEm', 'status']
      })
      .then(res => {
        response.status(201).json({ message: `Usuário cadastrado com sucesso.` })
      })

  } catch (e) {
    if (e instanceof Error) {
      response.status(404).json(`Não foi possível cadastrar usuário. ${e.message}`);
    }
  }
}

export const listarUsuarios = async (request: Request, response: Response) => {
  try {
    await Usuario
      .findAll({
        attributes: ['usuario_id', 'nome', 'email', 'senha', 'status']
      }).then(res => {
        response.status(200).json({
          res,
          message: `Usuários listados com sucesso.`
        });
      })

  } catch (e) {
    if (e instanceof Error) {
      response.status(404).json({
        message: `Não foi possível listar todos usuários. ${e.message}`
      });
    }
  }
}

export const mostrarUsuario = async (request: Request, response: Response) => {

  try {
    const user = await Usuario
      .findOne({
        where: {
          usuario_id: request.params.id
        }
      })
      .then(res => {
        response.status(200).json({
          res,
          message: `Dados do usuário apresentado com sucesso.`
        });
      });
  } catch (e) {
    if (e instanceof Error) {
      response.status(404).json({
        message: `Não foi possível apresentar dados do usuário ${request.body.id}. ${e.message}`
      });
    }
  }
}

export const atualizarUsuario = async (request: Request, response: Response) => {

  try {
    const user = await Usuario
      .findOne({
        where: { usuario_id: request.params.id },
        attributes: ['usuario_id', 'nome', 'email', 'senha', 'status']
      })

    user!.update({
      nome: request.body.nome,
      email: request.body.email,
      senha: request.body.senha,
    },

      { where: { id: request.body.id } }
    );

    user!.save().then(res => {
      response.status(200).json({
        res,
        message: `Dados do usuário ${request.body.id} atualizado com sucesso.`
      });
    })

  } catch (e) {
    if (e instanceof Error) {
      response.status(404).json({
        message: `Não foi possível apresentar dados do usuário ${request.body.id}. ${e.message}`
      });
    }
  }
}