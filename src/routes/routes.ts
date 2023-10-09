import { Router } from 'express';

import {
  cadastrarUsuario, listarUsuarios, mostrarUsuario, atualizarUsuario, deletarUsuario
} from '../controllers/usuarioController';

import { Alternativa } from '../controllers/alternativasController';

export const route = Router();

const alternativa = new Alternativa();

route.post('/cadastrarUsuario', cadastrarUsuario);
route.get('/listarUsuarios', listarUsuarios);
route.get('/mostrarUsuario/:id', mostrarUsuario);
route.put('/atualizarUsuario/:id', atualizarUsuario);
route.delete('/deletarUsuario/:id', deletarUsuario);

route.post('/cadastrarAlternativa', alternativa.cadastrar);
route.get('/selecionarAlternativas', alternativa.listar);
route.get('/alternativa/:id', alternativa.listarUmaAlternativa);
route.put('/alternativa/:id', alternativa.atualizar);
route.delete('/deletar/:id', alternativa.deletar);