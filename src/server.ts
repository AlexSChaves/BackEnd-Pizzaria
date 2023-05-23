import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import path from 'path';
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return res.status(400).json({
      error: error.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
