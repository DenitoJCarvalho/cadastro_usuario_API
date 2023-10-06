import { Router, Request, Response } from 'express';

import { cadastrarUsuario } from '../controllers/usuarioController';

export const route = Router();

route.post('/cadastrarUsuario', cadastrarUsuario);