import somar from './somar.js';
import subtrair from './subtrair.js';
import multiplicar from './multiplicar.js';
import dividir from './dividir.js';

const numberOneRef = document.getElementById("numberOne");
const numberTwoRef = document.getElementById("numberTwo");

const total = document.getElementById("total");
const btn_somar = document.getElementById("btn_somar");
const btn_subtrair = document.getElementById("btn_subtrair");
const btn_multiplicar = document.getElementById("btn_multiplicar");
const btn_dividir = document.getElementById("btn_dividir");

let numberOne, numberTwo;

function isNumber(operacao) {
  numberOne = parseFloat(numberOneRef.value);
  numberTwo = parseFloat(numberTwoRef.value);
  total.innerText = `Total: ${operacao(numberOne, numberTwo)}`;
  console.log(operacao(numberOne, numberTwo));
}

btn_somar.addEventListener("click", (event) =>{
  event.preventDefault();
  isNumber(somar);
  });

btn_subtrair.addEventListener("click", (event) =>{
  event.preventDefault();
  isNumber(subtrair);
  });

btn_multiplicar.addEventListener("click", (event) =>{
  event.preventDefault();
  isNumber(multiplicar);
  });

btn_dividir.addEventListener("click", (event) =>{
  event.preventDefault();
  isNumber(dividir);
  });
