/**
 * @author Adrian Iglesias Riño.
 * Github: https://github.com/Torremolinos/Windows_Calculator
 */
/*document.addEventListener("DOMContentLoaded", function () {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    const button4 = document.getElementById("button4");
    const button5 = document.getElementById("button5");
    const button6 = document.getElementById("button6");
    const button7 = document.getElementById("button7");
    const button8 = document.getElementById("button8");
    const button9 = document.getElementById("button9");
    const button0 = document.getElementById("button0");
    const operador1 = document.getElementById("porcentaje");
    const operador2 = document.getElementById("borradoparcial");
    const operador3 = document.getElementById("borradototal");    
    const operador4 = document.getElementById("borradouno");
    const operador5 = document.getElementById("pi");
    const operador6 = document.getElementById("cuadrado");
    const operador7 = document.getElementById("raizCuadrada"); 
    const operador8 = document.getElementById("dividir");
    const operador9 = document.getElementById("multiplicar");
    const operador10 = document.getElementById("restar");
    const operador11 = document.getElementById("sumar");
    const operador12 = document.getElementById("masmenos");
    const operador13 = document.getElementById("decimal");
    const operador14 = document.getElementById("igual");
    const pantalla = document.getElementById("screen");

    document.getElementById("button7").addEventListener("click", ingresarNumero);
    
    const ingresarNumero=()=>{
        const number = parseFloat(event.target.value);
        document.getElementById("screen").textContent= Number(number);
    }
    
    
   
   });*/
const historial =document.getElementById("historial");
let contador = 0;
const screen = document.getElementById("screen");
function escribir(numero) {
  if (contador != 11) {
    screen.innerHTML += numero;
    console.log("obteccion numero*****" + numero);
    contador++;
    console.log(contador);
    console.log(screen.innerHTML); //escribe
    console.log(screen.textContent);//agarra el contenido del texto.
  }
  
}
console.log(screen);
function borrarDisplay() {
  contador = 0;
  screen.innerHTML = "0";
  const cero = screen;
  console.log(screen.id);
}
console.log(document.getElementById("screen").value);
function calcularResultado(historial) {
  screen.innerHTML = eval(screen.innerHTML);
  historial.innerHTML += screen.innerHTML;
}
console.log(screen);
function borrarHistorial() {
  contador = 0;
  historial.innerHTML = "0";
  const cero = historial;
  console.log(historial.id);
}

//array de 11 para la screen para que cuando llame a la funcion de escribir le meta numero hasta el
//maximo de la array.
