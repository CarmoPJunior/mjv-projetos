const paths = {
  '/user/{id}': {
    get: {
      tags: ['User'],
      summary: 'User',
      description: 'Get user by Id',
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string',
          },
          description: 'uuid',
        },
      ],
      responses: {
        200: {
          description: 'OK',
          schema: {
            $ref: '#/definitions/User',
          },
        },
        401: {
          description: 'Unauthorized',
          schema: {
            $ref: '#/definitions/ErrorResponse',
          },
        },
        404: {
          description: 'Not Found',
          schema: {
            $ref: '#/definitions/ErrorResponse',
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
    put: {
      tags: ['User'],
      summary: 'User',
      description: 'Update user',
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string',
          },
          description: 'uuid',
        },
        {
          in: 'body',
          name: 'update',
          required: true,
          schema: {
            $ref: '#/definitions/UserPayload',
          },
        },
      ],
      responses: {
        200: {
          description: 'OK',
          schema: {
            $ref: '#/definitions/User',
          },
        },
        401: {
          description: 'Unauthorized',
          schema: {
            $ref: '#/definitions/ErrorResponse',
          },
        },
        404: {
          description: 'Not Found',
          schema: {
            $ref: '#/definitions/ErrorResponse',
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
    delete: {
      tags: ['User'],
      summary: 'User',
      description: 'Delete User',
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string',
          },
          description: 'uuid',
        },
      ],
      responses: {
        200: {
          description: 'OK',
        },
        401: {
          description: 'Unauthorized',
          schema: {
            $ref: '#/definitions/ErrorResponse',
          },
        },
        404: {
          description: 'Not Found',
          schema: {
            $ref: '#/definitions/ErrorResponse',
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
  '/user': {
    post: {
      tags: ['User'],
      summary: 'User',
      description: 'Create user',
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          in: 'body',
          name: 'create',
          required: true,
          schema: {
            $ref: '#/definitions/UserPayload',
          },
        },
      ],
      responses: {
        200: {
          description: 'OK',
          schema: {
            $ref: '#/definitions/User',
          },
        },
        401: {
          description: 'Unauthorized',
          schema: {
            $ref: '#/definitions/ErrorResponse',
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
    get: {
      tags: ['User'],
      summary: 'Users',
      description: 'Obter usuários',
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [ ],
      responses: {
        200: {
          description: 'OK',
          schema: {
            $ref: '#/definitions/UserList',
          },
        },
        401: {
          description: 'Unauthorized',
          schema: {
            $ref: '#/definitions/ErrorResponse',
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
  User: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      login: { type: 'string' },
      password: { type: 'string' },
      ativo: { type: 'boolean' },
      createdAt: { type: 'date' },
      updatedAt: { type: 'date' },
    },
  },
  UserList: {
    type: "array",
    items: {
      "$ref": "#/definitions/User"
    }
  },
  UserPayload: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      password: { type: 'string' },
    },
  },
};

export default {
  paths,
  definitions,
};
