const welcome = "Hello World :)"

console.log(welcome);

alert("Boas Vindas")

const number = [1,3,5,8,12,42,96,1024]

const numbers = [1, 3, 5, 8, 12, 42, 96, 1024]

let total = numbers.reduce(function(total, numero) {
     return total + numero;
   }, 0);
   
   console.log(total);

   function somaTudo(array){
        let num = 0
        for (let index = 0; index < array.length; index++) {
             num += array[index]
          console.log(num)
             
        }
   }

   console.log(number);

/* const numberss = [1, 3, 5, 8, 12, 42, 96, 1024]

var result = 0

for(let number of numberss) {

    result = number + result

    console.log('Resultado: '+result)

}

 */