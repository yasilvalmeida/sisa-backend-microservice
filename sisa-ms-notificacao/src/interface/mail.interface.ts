export interface IRequestActivationToken {
  email: string;
  nome: string;
  token: { value: string; expiresIn: string };
}
