import { getDateToday } from '../utils/dateUtil';
import { IFatura } from '../models/fatura.model';
import { ICategoria } from '../models/categoria.model';
import { IUser } from '../models/user.model';
import Status from '../enums/StatusEnum';
import moment from 'moment';

const seedFaturas = async (categoria: ICategoria, user: IUser) => {
  const faturas: Array<IFatura> = [
    {
      descricao: 'Fatura 1',
      valor: 100.0,
      status: Status.PENDENTE,
      dataVencimento: moment('10-04-2023', 'DD-MM-YYYY').toDate(),
      categoria: categoria._id,
      user: user._id,
      createdAt: getDateToday(),
    },
    {
      descricao: 'Fatura 2',
      valor: 200.0,
      status: Status.PAGO,
      dataVencimento: moment('10-04-2023', 'DD-MM-YYYY').toDate(),
      dataPagamento: moment('15-04-2023', 'DD-MM-YYYY').toDate(),
      categoria: categoria._id,
      user: user._id,
      createdAt: getDateToday(),
    },
    {
      descricao: 'Fatura 3',
      valor: 300.0,
      status: Status.PENDENTE,
      dataVencimento: moment('20-04-2023', 'DD-MM-YYYY').toDate(),
      categoria: categoria._id,
      user: user._id,
      createdAt: getDateToday(),
    },
  ];


  return faturas;
};

export default seedFaturas;
