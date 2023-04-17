import { ICategoria } from '../models/categoria.model';
import { getDateToday } from '../utils/dateUtil';

export const seedCategorias: Array<ICategoria> = [
  {
    nome: 'Energia',
    descricao: 'Descrição Energia',
    createdAt: getDateToday(),
  },
  {
    nome: 'Água',
    descricao: 'Descrição Água',
    createdAt: getDateToday(),
  },
  {
    nome: 'Internet',
    descricao: 'Descrição Internet',
    createdAt: getDateToday(),
  },
];
