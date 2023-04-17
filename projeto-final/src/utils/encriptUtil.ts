import bcrypt from 'bcrypt';

export const encriptarSenha = async (senha: string) : Promise<string> => {
  return await bcrypt.hash(senha, 10);
};
