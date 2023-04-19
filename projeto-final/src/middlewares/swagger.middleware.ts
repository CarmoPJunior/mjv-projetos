import fs from 'fs';
import { resolve } from 'path';
import { swaggerConfig } from '../config/swagger.config';


class SwaggerConfig {
  private readonly config: any = swaggerConfig;
  private paths = {};
  private definitions = {};

  constructor() {

    this.definitions = {
      ErrorResponse: {
        type: 'object',
        properties: {
          errors: {
            type: 'array',
            items: {
              $ref: '#/definitions/ErrorData',
            },
          },
        },
      },
      ErrorData: {
        type: 'object',
        properties: {
          code: {
            type: 'integer',
            description: 'Error code',
          },
          message: {
            type: 'string',
            description: 'Error message',
          },
        },
      },
    };
  }

  /**
   * Função responsável por percorrer as pastas e adicionar a documentação de cada módulo
   * @returns
   */
  public async load(): Promise<{}> {
    const dir = await fs.readdirSync(resolve(__dirname, '../docs'));

    console.log(dir)
    const swaggerDocument = dir.reduce(
      (total, path) => {
        try {
          const swagger = require(`../docs/${path}`);
          const aux = total;
          aux.paths = { ...total.paths, ...swagger.default.paths };
          if (swagger.default.definitions) {
            aux.definitions = {
              ...total.definitions,
              ...swagger.default.definitions,
            };
          }

          return total;
        } catch (e) {
          return total;
        }
      },
      {
        ...this.config,
        paths: { ...this.paths },
        definitions: { ...this.definitions },
      }
    );
    return swaggerDocument;
  }
}

export default new SwaggerConfig();
