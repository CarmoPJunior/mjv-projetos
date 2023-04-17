import { IUser } from '../models/user.model';
import { getDateToday } from '../utils/dateUtil';
import { encriptarSenha } from '../utils/encriptUtil';

const seedUsers = async () => {

  const senhaAdmin = await encriptarSenha('admin');
  const senhaUser = await encriptarSenha('password');

  const users: Array<IUser> = [
    {
      login: 'admin',
      password: senhaAdmin,
      ativo: true,
      createdAt: getDateToday(),
    },
    {
      login: 'user',
      password: senhaUser,
      ativo: true,
      createdAt: getDateToday(),
    },
  ];

  return users;
};


export default seedUsers;
