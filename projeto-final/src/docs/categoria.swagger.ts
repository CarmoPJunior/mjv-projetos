const paths = {
  '/categoria/{id}': {
    get: {
      tags: ['Categoria'],
      summary: 'Categoria',
      description: 'Get categoria by Id',
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
            $ref: '#/definitions/Categoria',
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
      tags: ['Categoria'],
      summary: 'Categoria',
      description: 'Update categoria',
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
            $ref: '#/definitions/CategoriaPayload',
          },
        },
      ],
      responses: {
        200: {
          description: 'OK',
          schema: {
            $ref: '#/definitions/Categoria',
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
      tags: ['Categoria'],
      summary: 'Categoria',
      description: 'Delete categoria',
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
  '/categoria': {
    post: {
      tags: ['Categoria'],
      summary: 'Categoria',
      description: 'Create categoria',
      parameters: [
        {
          in: 'body',
          name: 'create',
          required: true,
          schema: {
            $ref: '#/definitions/CategoriaPayload',
          },
        },
      ],
      responses: {
        200: {
          description: 'OK',
          schema: {
            $ref: '#/definitions/categoria',
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
      tags: ['Categoria'],
      summary: 'Categorias',
      description: 'Obter usuários',
      parameters: [ ],
      responses: {
        200: {
          description: 'OK',
          schema: {
            $ref: '#/definitions/CategoriaList',
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
  Categoria: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      nome: { type: 'string' },
      descricao: { type: 'string' },
      createdAt: { type: 'Date' },
      updatedAt: { type: 'date' },
    },
  },
  CategoriaList: {
    type: "array",
    items: {
      "$ref": "#/definitions/Categoria"
    }
  },
  CategoriaPayload: {
    type: 'object',
    properties: {
      nome: { type: 'string' },
      descricao: { type: 'string' },
    },
  },
};

export default {
  paths,
  definitions,
};
