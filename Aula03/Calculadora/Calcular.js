import { subtracao } from "./subtrair.js";
import { somar } from "./somar.js";
import { multiplicacao } from "./multiplicar.js";
import { divisao } from "./dividir.js";

let operacao
let a
let b

console.log("------------ Teste de operações / Calculadora-------"); 
console.log("O resultado da soma é: " + somar(10,5));  
console.log("O resultado da subtração é: " + subtracao(10,5));
console.log("O resultado da multiplicação é: " + multiplicacao(10,5)); 
console.log("O resultado da divisão é: " + divisao(10,5)); 
console.log("O resultado da divisão é: " + divisao(10,0));
console.log("-------- Fim de Teste de operações / Calculadora-------");