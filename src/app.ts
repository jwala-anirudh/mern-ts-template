import express, { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';

import logger from './config/logger';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Auth service');
});

app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(error.message);
  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    errors: [
      {
        type: error.name,
        message: error.message,
        path: '',
        location: '',
      },
    ],
  });

  next();
});

export default app;
