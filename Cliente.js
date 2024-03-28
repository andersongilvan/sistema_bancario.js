export class Cliente {
  // Definição dos atributos da classe
  nome;
  _cpf;
 // Getter para o CPF
get cpf(){
    return this._cpf
}
 // Método construtor da classe
  constructor(nome, cpf) {
    this.nome = nome
    this._cpf = cpf
  }
}
