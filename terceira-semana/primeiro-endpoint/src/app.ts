import express, { Request, Response, Router } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const router = Router();

router.get('/', (request: Request, response: Response) => {
  const healthCheck = { message: 'Aplicação funcionando!' };
  response.send(healthCheck);
});

app.use(router);

const port = 3000;

app.listen(port, () => {
  console.log('Aplicação rodando na porta: ', port);
});
