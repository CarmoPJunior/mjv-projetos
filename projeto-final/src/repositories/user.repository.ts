import { IUser, User } from '../models/user.model';
import { getDateToday } from '../utils/dateUtil';

class UserRepository {
  getAll() {
    return User.find();
  }

  getById(id: string) {
    return User.findOne({ _id: id });
  }

  getByLogin(login: string) {
    return User.findOne({ login: login });
  }

  create(user: IUser) {
    return User.create(user);
  }

  update(id: string, user: Partial<IUser>) {
    user.updatedAt = getDateToday();
    return User.updateOne({ _id: id, $set: user });
  }

  remove(id: string) {
    return User.deleteOne({ _id: id });
  }
}

export default new UserRepository();
