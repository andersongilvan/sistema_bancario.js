import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente('Anderson', 11111111123)
const ContaCorrenteAnderson = new ContaCorrente(1100, cliente1)

console.log(ContaCorrenteAnderson)
ContaCorrenteAnderson.depositar(500)
console.log(ContaCorrenteAnderson)