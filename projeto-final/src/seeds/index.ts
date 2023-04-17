import { Categoria, ICategoria } from '../models/categoria.model';
import { User, IUser } from '../models/user.model';
import { Fatura } from '../models/fatura.model';
import { seedCategorias } from './categoria.seed';
import  seedUsers  from './user.seed';
import  seedFaturas  from './fatura.seed';

const seedDB = async () => {
  console.log('Populando banco... inicio');

  await Categoria.deleteMany({});
  await User.deleteMany({});
  await Fatura.deleteMany({});

  await Categoria.insertMany(seedCategorias);

  await User.insertMany(await seedUsers());

  const categoria : ICategoria | null = await Categoria.findOne({ nome: 'Energia' }).exec();
  const user : IUser | null = await User.findOne({ login: 'admin' }).exec();

  if(categoria && user){
    const faturas = await seedFaturas(categoria, user);
    await Fatura.insertMany(faturas);
  }

  console.log('Populando banco... fim');
};

export default seedDB;
