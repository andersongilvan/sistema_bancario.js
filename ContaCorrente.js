import { Cliente } from "./Cliente.js";
  // Definição dos atributos da classe
export class ContaCorrente {
  agencia;
  _cliente;

  set cliente(novoValor){
    if(novoValor instanceof Cliente){
        this._cliente = novoValor
    }
  }
   // Getter e setter para o atributo cliente
  get cliente(){
    return this._cliente
    }
// Definição do saldo como atributo privado
  _saldo = 0; // privado

get saldo() {
    return this._saldo
}
 // Método construtor da classe
constructor(agencia, cliente) {
    this.agencia = agencia
    this.cliente = cliente
}
 // Método para sacar um valor da conta
  sacar(valor) {
    if (valor > 0) {
      if (this._saldo >= valor) {
        this._saldo -= valor;
      } else console.log("Saldo insuficiente");
    } else console.log("Valor inválido");
    return valor;
  }
 // Método para depositar um valor na conta
  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
    } else console.log("Valor Inválido");
  }
// Método para transferir um valor para outra conta
  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
