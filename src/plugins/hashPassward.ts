import { hash } from "bcrypt";

interface PasswordProps {
  password: string;
}

// Função assíncrona que recebe uma senha em texto claro e retorna uma senha criptografada.
export const hashPassword = async ({ password }: PasswordProps) => {
  // Define o número de "salt rounds" (rodadas de sal) a serem usadas para gerar o hash.
  // Mais rodadas aumentam a segurança, mas também o tempo de processamento.
  const saltRounds = 8;

  // Gera o hash da senha usando o número de salt rounds especificado.
  // 'await' é usado porque a função 'hash' é assíncrona e retorna uma Promise.
  const hashedPassword = await hash(password, saltRounds);

  // Retorna a senha criptografada.
  return hashedPassword;
};
