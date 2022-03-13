function rapidFood(prato, tempo) {
switch(prato) {
  case 1:
      if (tempo >= 30){
          console.log('Kabumm')
      }
      else if (tempo >= 20 ){
          console.log('Comida queimou')
      }
      else if (tempo < 10) {
          console.log('Tempo insuficiente')
      }
      else {
          console.log('Prato pronto, bom apetite!')
      }
      break;
  case 2:
      if (tempo >= 24){
          console.log('Kabumm')
      }
      else if (tempo >= 16 ){
          console.log('Comida queimou')
      }
      else if (tempo < 8) {
          console.log('Tempo insuficiente')
      }
      else {
          console.log('Prato pronto, bom apetite!')
      }
      break;
  case 3:
      if (tempo >= 45){
          console.log('Kabumm')
      }
      else if (tempo >= 30 ){
          console.log('Comida queimou')
      }
      else if (tempo < 15) {
          console.log('Tempo insuficiente')
      }
      else {
          console.log('Prato pronto, bom apetite!')
      }
      break;
  case 4:
      if (tempo >= 36){
          console.log('Kabumm')
      }
      else if (tempo >= 24 ){
          console.log('Comida queimou')
      }
      else if (tempo < 12) {
          console.log('Tempo insuficiente')
      }
      else {
          console.log('Prato pronto, bom apetite!')
      }
      break;
  case 5:
      if (tempo >= 24){
          console.log('Kabumm')
      }
      else if (tempo >= 16 ){
          console.log('Comida queimou')
      }
      else if (tempo < 8) {
          console.log('Tempo insuficiente')
      }
      else {
          console.log('Prato pronto, bom apetite!')
      }
      break;
}
}

console.log(rapidFood(5,13));
