import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './routers';
import connection from './config/database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.all('*', (req: Request, res: Response) => {
  res.status(404).send({
    status: 404,
    message: 'Recurso não encontrado!'
  });
});

const port = process.env.SERVER_PORT || 3000;

connection
  .then(() => {
    console.log('Banco de dados Conectado!');
    app.listen(port, () => {
      console.log('Aplicação rodando na porta: ', port);
    });
  })
  .catch((err) => console.log(err));
