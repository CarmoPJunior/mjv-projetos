const paths = {
  '/health': {
    get: {
      tags: ['Health'],
      summary: 'Health',
      description: 'Obtém status da api',
      parameters: [ ],
      responses: {
        200: {
          description: 'OK',
          schema: {
            $ref: '#/definitions/Health',
          },
        },
        500: {
          description: 'Internal Server Error',
          schema: {
            $ref: '#/definitions/ErrorResponse',
          },
        },
      },
    },
  },
};

const definitions = {
  Health: {
    type: 'object',
    properties: {
      message: { type: 'string' },
    },
  },
};

export default {
  paths,
  definitions,
};
