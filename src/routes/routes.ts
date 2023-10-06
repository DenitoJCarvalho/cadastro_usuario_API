import { Router, Request, Response } from 'express';

import {
  cadastrarUsuario, listarUsuarios, mostrarUsuario, atualizarUsuario, deletarUsuario
} from '../controllers/usuarioController';

export const route = Router();

route.post('/cadastrarUsuario', cadastrarUsuario);
route.get('/listarUsuarios', listarUsuarios);
route.get('/mostrarUsuario/:id', mostrarUsuario);
route.put('/atualizarUsuario/:id', atualizarUsuario);
route.delete('/deletarUsuario/:id', deletarUsuario);