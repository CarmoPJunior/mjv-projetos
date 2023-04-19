const paths = {
  '/auth': {
    post: {
      tags: ['Auth'],
      summary: 'Auth',
      description: 'Obtem token',
      parameters: [
        {
          in: 'body',
          name: 'create',
          required: true,
          schema: {
            $ref: '#/definitions/AuthPayload',
          },
        },
      ],
      responses: {
        200: {
          description: 'OK',
          schema: {
            $ref: '#/definitions/Auth',
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
  Auth: {
    type: 'object',
    properties: {
      token: { type: 'string' },
    },
  },
  AuthPayload: {
    type: 'object',
    properties: {
      login: { type: 'string' },
      password: { type: 'string' },
    },
  },
};

export default {
  paths,
  definitions,
};
