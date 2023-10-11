/**
 * @author Adrian Iglesias Riño.
 * Github: https://github.com/Torremolinos/Windows_Calculator
 */
//document.addEventListener("DOMContentLoaded", function () { (no me funciona no se porque)
//declaro variables que voy a ir utilizando de manera globar.
document.addEventListener("DOMContentLoaded", function () {
 // Variable para controlar si la última entrada fue una operación
let ultimaFueOperacion = false;

// me parecia interesante esta function tenia otra pero chat gpt la mejoro
function escribir(valor) {
  const screen = document.getElementById('screen');
  if (ultimaFueOperacion && '+-*/'.includes(valor)) {
    return;
  }
  if (screen.textContent.length < 9) {
    if (screen.textContent === '0') {
      screen.textContent = valor;
    } else {
      screen.textContent += valor;
    }
  }
  // .includes es como un substring, por ejemplo le digo si tiene ese valor enfrente que retorne true. y sino false
  ultimaFueOperacion = '+-*/'.includes(valor);
}
  function borrarDisplay() {
    const screen = document.getElementById('screen');
    if (screen.textContent.length === 1 && screen.textContent === '0') {
      return;
    }
    screen.textContent = '0';
  }

  // Función para calcular el resultado
  function calcularResultado() {
    const screen = document.getElementById("screen");
    try {
      // Utilizamos eval para evaluar la expresión matemática, básicamente mira el simbolo y ejecuta la operacion.
      const resultado = eval(screen.textContent);
      screen.textContent = resultado.toString().substring(0,10);
    } catch (error) {
      // Manejamos errores si la expresión no es válida.
      screen.textContent = "Error";
    }
  }

// Función para el botón π
function pi() {
  const screen = document.getElementById('screen');
  /* Si el valor actual en el display es solo un cero o la última entrada fue una operación,
  simplemente muestra el valor de π en el display.*/
  if (screen.textContent === '0' || ultimaFueOperacion) {
    screen.textContent = Math.PI.toString().substring(0, 10);
  } else {
    /* De lo contrario, multiplica π por el número en el display y limita el resultado a 9 dígitos.*/
    const valorActual = parseFloat(screen.textContent);
    const resultado = (Math.PI * valorActual).toString().substring(0, 10);
    screen.textContent = resultado;
  }
}

function masmenos() {
  const screen = document.getElementById('screen');

  // Si el valor actual en el display es un número negativo, quita el signo negativo para cambiarlo a positivo.
  if (screen.textContent.startsWith('-')) {
    screen.textContent = screen.textContent.slice(1); //vi otra manera de hacerlo pero esta funciona asi que no toco na.
  } else {
    // De lo contrario, agrega un signo negativo al número para cambiarlo de positivo a negativo.
    screen.textContent = `-${screen.textContent}`;
  }
}
// Función para calcular el cuadrado de un número y limitar a 9 dígitos
function cuadrado() {
  const screen = document.getElementById('screen');
  const valorActual = parseFloat(screen.textContent);

  // Calcula el cuadrado y limita el resultado a 9 dígitos
  const resultado = (valorActual * valorActual).toString().substring(0, 9);

  // Actualiza el contenido del display con el cuadrado
  screen.textContent = resultado;
  ultimaFueOperacion = false;
}

  // Aqui voy a enlazar los eventos.
  document.getElementById("porcentaje").addEventListener("click", () => escribir("%"));
  document.getElementById("pi").addEventListener("click", () => (pi()));
  document.getElementById("borradototal").addEventListener("click", borrarDisplay);
  document.getElementById("backtab").addEventListener("click", () => {
    const screen = document.getElementById("screen");
    screen.textContent = screen.textContent.slice(0, -1);
  });

  document.getElementById("unox").addEventListener("click", () => {
    const screen = document.getElementById("screen");
    screen.textContent = 1/screen.textContent;
  });
//ha todos estos metodos los modifico a mano para que no me rompan el Display dado que con el template no lo se controlar
  document.getElementById("cuadrado").addEventListener("click", () => {
    const screen = document.getElementById("screen");
    screen.textContent = screen.textContent*screen.textContent;
  });

  document.getElementById("raizCuadrada").addEventListener("click", () => {
  const screen = document.getElementById('screen');
  const valorActual = parseFloat(screen.textContent);
  const resultado = Math.sqrt(valorActual).toString().substring(0, 9); //esto es una pajada de chatgpt pero me lo dejaba bien. Entiendo que me lo como string y yo lo recorto hasta 9.
  screen.textContent = resultado;
  });

  document.getElementById("dividir").addEventListener("click", () => escribir("/"));
  document.getElementById("button7").addEventListener("click", () => escribir("7"));
  document.getElementById("button8").addEventListener("click", () => escribir("8"));
  document.getElementById("button9").addEventListener("click", () => escribir("9"));
  document.getElementById("multiplicar").addEventListener("click", () => escribir("*"));
  document.getElementById("button4").addEventListener("click", () => escribir("4"));
  document.getElementById("button5").addEventListener("click", () => escribir("5"));
  document.getElementById("button6").addEventListener("click", () => escribir("6"));
  document.getElementById("restar").addEventListener("click", () => escribir("-"));
  document.getElementById("button1").addEventListener("click", () => escribir("1"));
  document.getElementById("button2").addEventListener("click", () => escribir("2"));
  document.getElementById("button3").addEventListener("click", () => escribir("3"));
  document.getElementById("sumar").addEventListener("click", () => escribir("+"));
  document.getElementById("masmenos").addEventListener("click", () =>masmenos());
  document.getElementById("button0").addEventListener("click", () => escribir("0"));
  document.getElementById("decimal").addEventListener("click", () => escribir("."));
  document.getElementById("igual").addEventListener("click", calcularResultado);
});

//});
