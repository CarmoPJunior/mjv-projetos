import moment from 'moment';

export const getDateToday = () => {
  const dataAtual = moment().utc().subtract(3, 'hour');
  return dataAtual.toDate();
};
