import express from 'express';
//import cors from 'cors';

import { normalizePort } from './server/server';
import { dotenv } from './environment/env';

import 'reflect-metadata';


const app = express();
const port = normalizePort(dotenv.PORT || '9292');

app.listen(port, () => {
  console.log(`Server is running in dev localhost:${port}`);
});