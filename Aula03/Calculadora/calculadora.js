import {somar} from './somar';
import {subtrair} from './subtracao';
import {div} from './divisao';
import {multiplicacao} from './multiplicacao';


let numberOneReferencia = document.querySelector('#numberOne');
let numberTwoReferencia = document.querySelector('#numberTwo');
let btnSomarReferencia = document.querySelector('#btnSomar');
let btnSubtrairReferencia = document.querySelector('#btnSubtrair');
let btnMultiplicarReferencia = document.querySelector('#btnMultiplicar');
let btnDividirReferencia = document.querySelector('#btnDividir');
/* let btnEnviarReferencia = document.querySelector('#btnEnviar');
let btnResetReferencia = document.querySelector('#btnEnviar'); */

let one = numberOneReferencia.innerHTML;
let two = numberTwoReferencia.innerHTML;



/* console.log(const) */

btnSomarReferencia.addEventListener('click', (event) => {

     event.preventDefault()
     console.log(one + two);
})

btnSubtrairReferencia.addEventListener('click', (event) => {

     event.preventDefault()

})

btnDividirReferencia.addEventListener('click', (event) => {

     event.preventDefault()

})

btnMultiplicarReferencia.addEventListener('click', (event) => {

     event.preventDefault()

})
