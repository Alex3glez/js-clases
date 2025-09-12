/*
================================================================
 CONCEPTOS AVANZADOS DE JAVASCRIPT - GUÍA DE REFERENCIA
================================================================
*/

/*
----------------------------------------------------------------
 1. FUNCIONES AVANZADAS
----------------------------------------------------------------
*/

/* --- A. Funciones como Valores (First-Class Functions) --- */
// En JavaScript, las funciones pueden ser tratadas como cualquier otro valor:
// pueden ser asignadas a variables, guardadas en arrays, objetos, etc.

const sayHello = function (name) {
  return "Hola, " + name;
};

const sayBye = function (name) {
  return "Adios, " + name;
};

// Guardando funciones en un Array
const listFunction = [sayHello, sayBye];
// Para usarla: listFunction[0]("Juan"); -> "Hola, Juan"

// Guardando funciones en un Objeto
const objFunction = {
  hello: sayHello,
  bye: sayBye,
};
// Para usarla: objFunction.hello("Ana"); -> "Hola, Ana"

/* --- B. Callbacks --- */
// Un "callback" es una función que se pasa como argumento a otra función,
// para ser "llamada de vuelta" (ejecutada) en un momento posterior.

function getDataUser(callback) {
  // Simulamos la obtención de datos de un usuario
  const userData = {
    name: "Juan",
    email: "juan@gmail.com",
  };

  // Una vez que tenemos los datos, ejecutamos la función callback
  // y le pasamos esos datos.
  callback(userData);
}

// Creamos funciones que servirán como callbacks
function showUserName(data) {
  console.log("Nombre de usuario:", data.name);
}

function showUserEmail(data) {
  console.log("Email de usuario:", data.email);
}

// Ejecutamos la función principal pasándole el callback que queremos usar
// getDataUser(showUserName); // Imprimirá: Nombre de usuario: Juan
// getDataUser(showUserEmail); // Imprimirá: Email de usuario: juan@gmail.com

/* --- C. Closures (Clausuras) --- */
// Una clausura o closure es una función que "recuerda" el entorno (ámbito)
// en el que fue creada. Esto le permite acceder a variables de su función padre,
// incluso después de que la función padre haya terminado de ejecutarse.

// Ejemplo 1: Fábrica de funciones
function generateMultiply(factor) {
  // Esta función interna "recuerda" el valor de 'factor'
  return function (num) {
    return num * factor;
  };
}

// Creamos funciones especializadas a partir de la "fábrica"
const double = generateMultiply(2); // Esta función siempre recordará que factor = 2
const triple = generateMultiply(3); // Esta función siempre recordará que factor = 3

// console.log(double(5)); // Resultado: 10
// console.log(triple(5)); // Resultado: 15

// Ejemplo 2: Creando estado privado
const counter = function () {
  let cont = 0; // 'cont' es una variable "privada", no se puede acceder desde fuera.

  // Devolvemos un objeto con métodos que SÍ pueden acceder y modificar 'cont'
  return {
    increment: function () {
      cont++;
    },
    getValue: function () {
      return cont;
    },
    decrement: function () {
      cont--;
    },
  };
};

// const myCounter = counter();
// myCounter.increment();
// myCounter.increment();
// console.log(myCounter.getValue()); // Imprime 2
// // console.log(myCounter.cont) // Imprime 'undefined', no se puede acceder directamente

/*
----------------------------------------------------------------
 2. BUCLES Y MÉTODOS DE ITERACIÓN
----------------------------------------------------------------
*/

let colors = ["azul", "verde", "amarillo", "naranja"];
const students = [
  { name: "Eduard" },
  { name: "Daniel" },
  { name: "Asif" },
  { name: "Ana" },
  { name: "Diego" },
];

/* --- A. Bucle for --- */
// Ofrece control total sobre la iteración (inicio, fin, incremento).
// for (let i = 0; i < colors.length; i++) {
//     // 'continue' salta a la siguiente iteración del bucle.
//     if (colors[i] === "azul") {
//         continue;
//     }
//     console.log(colors[i]);
//     // 'break' termina el bucle por completo.
//     if (colors[i] === "amarillo") {
//         break;
//     }
// }

/* --- B. Bucle while --- */
// Se ejecuta mientras una condición sea verdadera. Ideal cuando no
// sabemos el número exacto de iteraciones.
let cont = 0;
// while (cont < 10) {
//     console.log(cont);
//     cont++; // ¡Importante! Incrementar para no crear un bucle infinito.
// }

/* --- C. Bucle for...of --- */
// Sintaxis moderna y legible para recorrer elementos de un iterable (como un array).
// for(const student of students){
//     console.log(student.name);
// }
// // También se puede desestructurar para acceder directamente a la propiedad.
// for(const { name } of students){
//     console.log(name);
// }

/* --- D. Método .forEach() --- */
// Ejecuta una función para cada elemento del array. No devuelve un nuevo array.
colors.forEach((color, index) => {
  // console.log(`El color es: ${color} y su índice es ${index}`);
});

/* --- E. Método .map() --- */
// Crea un NUEVO array con los resultados de aplicar una función a cada
// elemento del array original. Es ideal para transformar datos.

// Ejemplo 1: Transformando un array de strings a un array de objetos.
const colorsAsObjects = colors.map((color) => ({ name: color }));
// console.log(colorsAsObjects);

// Ejemplo 2: Creando una copia del array.
const colorsCopy = colors.map((color) => {
  return color;
});
// console.log(colorsCopy);
