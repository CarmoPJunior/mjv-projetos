
export const swaggerConfig = {
  swagger: '2.0',
  basePath: '/',
  info: {
    title: 'MJV - Projeto Final - Gerenciamento de contas a pagar',
    version: '1.0.0',
  },
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    JWT: {
      description: 'JWT token',
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
    },
  },
};
