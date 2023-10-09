/**
 * @author Adrian Iglesias Riño.
 * Github: https://github.com/Torremolinos/Windows_Calculator
 */
//document.addEventListener("DOMContentLoaded", function () { (no me funciona no se porque)
//declaro variables que voy a ir utilizando de manera globar.
document.addEventListener("DOMContentLoaded", function () {
 // Variable para controlar si la última entrada fue una operación
let ultimaFueOperacion = false;

// Función para escribir en el display
function escribir(valor) {
  const screen = document.getElementById('screen');

  // Si la última entrada fue una operación y el nuevo valor también es una operación, no hagas nada.
  if (ultimaFueOperacion && '+-*/'.includes(valor)) {
    return;
  }

  // Limita el display a un máximo de 9 dígitos
  if (screen.textContent.length < 9) {
    // Si el valor actual en el display es solo un cero, reemplázalo con el nuevo valor
    if (screen.textContent === '0') {
      screen.textContent = valor;
    } else {
      // De lo contrario, simplemente agrega el valor al contenido existente
      screen.textContent += valor;
    }
  }

  // Actualiza la variable ultimaFueOperacion
  ultimaFueOperacion = '+-*/'.includes(valor);
}
  // Función para borrar el contenido del display
  function borrarDisplay() {
    const screen = document.getElementById('screen');
  
    // Si el contenido del display es solo un "0", no lo borres.
    if (screen.textContent.length === 1 && screen.textContent === '0') {
      return;
    }
  
    // De lo contrario, borra el contenido del display.
    screen.textContent = '0';
  }

  // Función para calcular el resultado
  function calcularResultado() {
    const screen = document.getElementById("screen");
    try {
      // Utilizamos eval para evaluar la expresión matemática
      const resultado = eval(screen.textContent);
      screen.textContent = resultado.toString().substring(0,10);
    } catch (error) {
      // Manejamos errores si la expresión no es válida
      screen.textContent = "Error";
    }
  }

  // Función para el botón π
function pi() {
  const screen = document.getElementById('screen');
  // Si el valor actual en el display es solo un cero o la última entrada fue una operación,
  // simplemente muestra el valor de π en el display.
  if (screen.textContent === '0' || ultimaFueOperacion) {
    screen.textContent = Math.PI.toString().substring(0, 10);
  } else {
    // De lo contrario, multiplica π por el número en el display y limita el resultado a 9 dígitos.
    const valorActual = parseFloat(screen.textContent);
    const resultado = (Math.PI * valorActual).toString().substring(0, 10);
    screen.textContent = resultado;
  }
}

function masmenos() {
  const screen = document.getElementById('screen');

  // Si el valor actual en el display es un número negativo, quita el signo negativo para cambiarlo a positivo.
  if (screen.textContent.startsWith('-')) {
    screen.textContent = screen.textContent.slice(1);
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

  // Enlazar funciones a los botones utilizando addEventListener
  document.getElementById("porcentaje").addEventListener("click", () => escribir("%"));
  document.getElementById("pi").addEventListener("click", () => (pi()));
  document.getElementById("borradototal").addEventListener("click", borrarDisplay);
  document.getElementById("backtab").addEventListener("click", () => {
    const screen = document.getElementById("screen");
    screen.textContent = screen.textContent.slice(0, -1);
  });

  document.getElementById("unox").addEventListener("click", () => {
    const screen = document.getElementById("screen");
    screen.textContent = `1/(${screen.textContent})`;
  });
//ha todos estos metodos los modifico a mano para que no me rompan el Display dado que con el template no lo se controlar
  document.getElementById("cuadrado").addEventListener("click", () => {
    const screen = document.getElementById("screen");
    screen.textContent = screen.textContent*screen.textContent;
  });

  document.getElementById("raizCuadrada").addEventListener("click", () => {
  const screen = document.getElementById('screen');
  const valorActual = parseFloat(screen.textContent);
  const resultado = Math.sqrt(valorActual).toString().substring(0, 9);
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
//array de 8 para la screen para que cuando llame a la funcion de escribir le meta numero hasta el
//maximo de la array.
//para borrar display inner -1 . display inner = ;
