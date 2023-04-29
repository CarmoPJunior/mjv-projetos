export const swaggerConfig = {
  swagger: '2.0',
  basePath: '/',
  info: {
    title: 'MJV - Projeto Final - Gerenciamento de contas a pagar',
    version: '1.0.0',
    description: 'Documentação da API da Gerenciamento de contas a pagar',
  },
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      scheme: 'bearer',
      in: 'header',
      name: 'Authorization',
      bearerFormat: 'JWT',
      description: 'JWT token - Enter the token with the `Bearer: ` prefix, ex. "Bearer abcde12345'

    },
  },
};
