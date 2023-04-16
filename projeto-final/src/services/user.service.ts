import UserRepository from '../repositories/user.repository';
import { IUser } from '../models/user.model';

class UserService {
  async getAll() {
    return await UserRepository.getAll();
  }

  async getById(id: string) {
    const user = await UserRepository.getById(id);
    if (!user) {
      throw new Error('User not found!');
    }
    return user;
  }

  async create(user: IUser) {
    return await UserRepository.create(user);
  }

  async update(id: string, updatedFields: Partial<IUser>) {
    const user = await UserRepository.getById(id);

    if (!user) {
      throw new Error('User not found!');
    }

    return await UserRepository.update(id, updatedFields);
  }

  // async delete(id: string) {
  //   const user = await UserRepository.getById(id);

  //   if (!user) {
  //     throw new Error('User not found!');
  //   }
  //   return await UserRepository.remove(id);
  // }
}

export default new UserService();
