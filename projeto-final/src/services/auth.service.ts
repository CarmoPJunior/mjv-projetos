import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import UserRepository from '../repositories/user.repository';
import { IUser } from '../models/user.model';

dotenv.config();
const secretJWT = process.env.JWT_SECRET_KEY || '';

class AuthService {
  async gerarToken(userId: string) {
    return jwt.sign({ userId }, secretJWT, { expiresIn: '1h' });
  }

  async autorizacao(login: string, password: string) {

    const user: IUser | null = await UserRepository.getByLogin(login);

    if (!user) {
      throw new Error('Usuário não encontrado!');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error('login ou senha inválidos!');
    }

    return  await this.gerarToken(user._id);
  }
}

export default new AuthService();
