let escolhaUsuario = parseInt(prompt('1- Pedra, 2- Papel, 3- Tesoura'))
let escolhaBot = parseInt(Math.random()*3+1)

if(escolhaUsuario > 0 && escolhaUsuario < 4) {

    if(escolhaUsuario === 1) {

        if(escolhaBot === 1) {

            alert('empatou')

        }

        if(escolhaBot === 2) {

            alert('o usuário perdeu')

        }

        if(escolhaBot === 3) {

            alert('o usuário ganhou')

        }

    }

    if(escolhaUsuario === 2) {

        if(escolhaBot === 1) {

            alert('o usuário ganhou')

        }

        if(escolhaBot === 2) {

            alert('empatou')

        }

        if(escolhaBot === 3) {

            alert('o usuário perdeu')

        }

    }

    if(escolhaUsuario === 3) {

        if(escolhaBot === 1) {

            alert('o usuário perdeu')

        }

        if(escolhaBot === 2) {

            alert('o usuário ganhou')

        }

        if(escolhaBot === 3) {

            alert('empatou')

        }

    }

    console.log(escolhaUsuario, escolhaBot)

} else {

    alert('O numero escolhido ntya erroqspidoa')

}    



let opcaoUser = parseInt(prompt('1- Pedra, 2- Tesoura, 3- Papel'))
let bot = parseInt(Math.random()*3+1)

for(let i = 0; 2; i++)


if( opcaoUser < 1 || opcaoUser > 3 ){
   alert('Digitou o numero errado')
}else{
    if (bot === 1 && opcaoUser === 1 || bot === 2 && opcaoUser === 2 || bot === 3 && opcaoUser === 3) {
        alert('Empatou')
    } if (bot === 1 && opcaoUser === 2 || bot === 3 && opcaoUser === 1 || bot === 2 && opcaoUser === 3) {
        alert('Bot Ganhou')
    } else {
        alert('User Ganhou')
    }
}
