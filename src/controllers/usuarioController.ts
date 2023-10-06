import { Request, Response } from 'express';

import { database } from '../database/typeorm';

import { Usuario } from '../models/usuarioModel'

export const cadastrarUsuario = async (request: Request, response: Response) => {

  try {

    await database.createQueryBuilder()
      .insert()
      .into(Usuario)
      .values({
        nome: request.body.nome,
        email: request.body.email,
        senha: request.body.senha,
        criadoEm: Date.now(),
        status: 0
      })
      .execute()
      .then(res => {
        response.status(201).json(`Usuário ${request.body.nome} criado com sucesso. ${res}`);
      })
      .catch(e => {
        if (e instanceof Error) {
          response.status(400).json(`Erro ao cadastrar usuário. ${e.message}`)
        }
      })


  } catch (e) {
    if (e instanceof Error) {
      response.status(404).json(`Não foi possível cadastrar usuário. ${e.message}`);
    }
  }
}

export const listarUsuarios = async (request: Request, response: Response) => {

  try {
    await database.createQueryBuilder()
      .select('usuario_id')
      .from(Usuario, 'usuario')
      .getMany()
      .then(res => {
        response.status(200).json(`Usuários listados com sucesso ${res}`)
      })
      .catch((e) => {
        if (e instanceof Error) {
          response.status(400).json(e.message);
        }
      })

  } catch (e) {
    if (e instanceof Error) {
      response.status(404).json(`Usuários não encontrado ${e.message}`)
    }
  }
}

export const mostrarUsuario = async (request: Request, response: Response) => {

  try {
    await database.createQueryBuilder()
      .select('usuario_id')
      .from(Usuario, 'usuario')
      .where('usuario_id = :id', { id: request.body.id })
      .getOne()
      .then(res => {
        response.status(200).json(res);
      })
      .catch(e => {
        if (e instanceof Error) {
          response.status(400).json(`Erro ao buscar usuário. ${e.message}`);
        }
      })

  } catch (e) {
    if (e instanceof Error) {
      response.status(404).json(`Não foi possível encontrar usuário. ${e.message}`);
    }
  }
}

export const atualizarUsuario = async (request: Request, response: Response) => {

  try {
    await database.createQueryBuilder()
      .update(Usuario)
      .set({
        nome: request.body.nome,
        email: request.body.email,
        senha: request.body.senha
      })
      .where('usuario_id = :id', { id: request.body.id })
      .execute()
      .then()
      .catch(e => {
        if (e instanceof Error) {
          response.status(400).json(`Erro ao atualizar usuário ${request.body.usuario_id}. ${e.message}`)
        }
      })
  } catch (e) {
    if (e instanceof Error) {
      response.status(404).json(`Usuário não encontrado. ${e.message}`)
    }
  }
}

export const deletarUsuario = async (request: Request, response: Response) => {

  try {
    await database.createQueryBuilder()
      .delete()
      .from(Usuario)
      .where('id = :id', { id: request.body.id })
      .execute()
      .then(res => {
        response.status(200).json(`Usuário ${request.body.id} deletado com sucesso.`);
      })
      .catch(e => {
        if (e instanceof Error) {
          response.status(400).json(`Erro ao deletar o usuário ${request.body.id}. ${e.message}`)
        }
      })
  } catch (e) {
    if (e instanceof Error) {
      response.status(404).json(`Usuário não encontrado. ${e.message}`)
    }
  }
}