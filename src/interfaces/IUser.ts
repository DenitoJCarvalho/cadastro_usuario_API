export interface IUser {
  usuario_id?: number,
  nome: string,
  email: string,
  senha: string,
  criadoEm: Date,
  status?: number
}