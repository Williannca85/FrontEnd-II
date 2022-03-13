/* const numbers = [1,2,3,4,5,6]

console.log(numbers)
 */
//Laçõs de Rep + Array e Obj

//FOR oF

/* for (let index = 0; index < array.length; index++) {
     const element = array[index];
     
} */

/* for (let number of numbers){

     console.log(number)//

}  */// pegando o número dentro dos números
//Array padrão do FOR oF
//Integração para apresentar
// Vai percorrer até o final
//vai aparecer o nome do atributo

//FOR iN

/* const user = {

     name: 'Willian Almeida',
     age: 36,
     birthDate: '29/04/1985',
     userDetail: 'teste'

}// {} cria um objeto agrupado
console.log(user.name)

for(let userDetail in user) {

     console.log(userDetail)
} //vai aparecer o nome do objeto 

 */

let escolhauser = parseInt(prompt ('1 - Pedra, 2 - Papel, 3 - Tesoura'))
let escolhaBot = parseInt(Math.random()*3+1)


if (escolhauser === 1) {

     if (escolhaBot === 1) {
          alert ('empatou')
     }
     
     if (escolhaBot === 2) {
          alert ('O usuario perdeu')
     }

     if (escolhaBot === 3){
          alert('O usuario ganhou')
     }
} 

if (escolhauser === 2) {

     if (escolhaBot === 1) {
          alert ('empatou')
     }
     
     if (escolhaBot === 2) {
          alert ('O usuario perdeu')
     }

     if (escolhaBot === 3){
          alert('O usuario perdeu')
     }
} 

if (escolhauser === 3) {

     if (escolhaBot === 1) {
          alert ('empatou')
     }
     
     if (escolhaBot === 2) {
          alert ('O usuario perdeu')
     }

     if (escolhaBot === 3){
          alert('O usuario perdeu')
     }
} 

console.log(escolhauser , escolhaBot)

//gerar numeros aleatorios
// parseInt foi usado para tirar as casas decimais

