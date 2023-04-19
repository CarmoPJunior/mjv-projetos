import { Router, Request, Response } from 'express';
import { setup, serve } from 'swagger-ui-express';
import SwaggerDocument from '../middlewares/swagger.middleware';

class SwaggerRoutes {
  async load(): Promise<Router> {
    const swaggerRoute = Router();
    const document = await SwaggerDocument.load();
    swaggerRoute.use('/', serve);
    swaggerRoute.get('/', setup(document));
    swaggerRoute.get('/docs.json', (_: Request, res: Response) =>
      res.json(document)
    );

    return swaggerRoute;
  }
}

export default new SwaggerRoutes();
