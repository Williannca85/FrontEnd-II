/* window.onload = function(){
     console.log('o documento está pronto');
  }

  btn.onclick = function(){
     console.log('Você clicou!');
  }

let hiperlink = document.querySelector('a');
//Pegamos o elemento.

hiperlink.addEventListener('click', function(event){
     //Pegamos o evento.

   console.log('Você clicou');
   event.preventDefault();
   //Impedimos a ação nativa.

});

// MouseOver

let texto = document.querySelector('.text');
texto.onmouseover = function(){
   console.log('Você passou o mouse');
}

texto.addEventListener('mouseover', function(){
     console.log('Você passou o mouse');
  });
  
  let test = document.getElementById("example");

  test.addEventListener("mouseover", function (event) {
    //highlight the mouseover target
    event.target.style.color = "red";
  }, false);
  
  test.addEventListener("mouseout", function (event) {
    // highlight the mouseout target
    event.target.style.color = "black";
  }, false); */

  //   MouseOut
  
  l/* et texto = document.querySelector('.text');
  texto.onmouseout = function(){
     console.log('Você retirou o mouse');
  }
  
  texto.addEventListener('mouseout', function(){
       console.log('Você retirou o mouse');
    });
    
   */

function aperta()
{
 var status=document.getElementById("status");
 status.innerHTML="Você apertou o botão do mouse";
}

function solta()
{
 var status=document.getElementById("status");
 status.innerHTML="Você soltou o botão do mouse";
}

function clica()
{
 var status2=document.getElementById("status2");
 status2.innerHTML="Você clicou com o botão do mouse";
}

// -------------------------------------------------

function porCima(obj)
{
 obj.style.backgroundColor = "#00FF0099";
    obj.innerHTML = "Mouse dentro!";
}
 
function porFora(obj)
{
 obj.style.backgroundColor = "#0000FF99";
    obj.innerHTML = "Mouse fora!";
}

    
   ul.onclick = e => {
     let target = e.target;

     if(target.tagName != 'li') return;

     if(e.ctrlKey || e.cmdKey) {
       toggleSelect(target)
       return;
     }

     singleSelect(target); 
   }

/*    function toggleSelect(target) {
     target.classList.toggle('selected')
   }

   function singleSelect(target) {
     for (let elem of ul.children) {
       elem.classList.remove('selected')
     } 

     target.classList.add('selected');
   } 
 */
  let test = document.getElementById("#examplo");

   test.addEventListener("mouseover", function (event) {
     //highlight the mouseover target
     event.target.style.color = "red";
   }, false);
   
   test.addEventListener("mouseout", function (event) {
     // highlight the mouseout target
     event.target.style.color = "black";
   }, false);

/* ------------------------------------------------------------------ */

const btn = document.querySelector('.color');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

btn.addEventListener('click', changeBackground);

const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

form.addEventListener('submit', e => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
});




 

