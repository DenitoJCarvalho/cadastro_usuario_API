import express from 'express';
import cors from 'cors';

import { normalizePort } from './server/server';
import { database } from './database/typeorm';
import { route } from './routes/routes';
import { dotenv } from './environment/env';

import 'reflect-metadata';

const app = express();
const port = normalizePort(dotenv.PORT || '9292');

app.use(cors({
  origin: '*',
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: [
    'Content-Type', 'Authorizathion', dotenv.URL_LOCAL
  ],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true
}));

app.use(express.json());
app.use('/', route);

app.listen(port, () => {
  console.log(`Server is running in dev localhost:${port}`);

  database.initialize()
    .then(() => {
      console.log(`Banco de dados inicializado.`);
    })
    .catch((e) => {
      if (e instanceof Error) {
        console.error(`Erro ao inicializar banco de dados ${e.message}`);
      }
    });
});