export class User {
  id: number;
  email: string;
  senha: string;
  nome: string;
  sobrenome: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
  ativo: boolean = true;
  funcionario: boolean = false;
}
