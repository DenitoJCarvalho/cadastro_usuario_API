import { Router } from 'express';

import { Usuario } from '../controllers/usuarioController';

export const route = Router();

const user = new Usuario();

route.post('/cadastarUsuario', user.cadastrar);