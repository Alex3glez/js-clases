/*
================================================================
 FUNDAMENTOS DE JAVASCRIPT - GUÍA DE REFERENCIA
================================================================
*/

/*
----------------------------------------------------------------
 1. TIPOS DE DATOS
----------------------------------------------------------------
*/

/* --- A. Tipos de Datos Primitivos --- */

// number: Para valores numéricos, ya sean enteros, decimales o negativos.
let price = 29.99;
let debt = -120;
// console.log(typeof price);
// console.log(typeof debt);

// string: Para texto. Se pueden usar comillas dobles "" o sencillas ''.
let firstName = "Juan";
// console.log(firstName);
// console.log(typeof firstName);

// boolean: Representa un valor lógico, verdadero (true) o falso (false).
let isOlder = true;
let isBlocked = false;

// undefined: Una variable que ha sido declarada pero no se le ha asignado un valor.
let secondName; // El valor es undefined

// null: Representa la ausencia intencional de un valor de objeto.
let jobName = null;

/* --- B. Tipos de Datos de Objeto --- */

// Objeto (Object): Una colección de pares clave-valor.
let _person = {
  name: "Juan",
  age: 31,
  phone: "+57 .....",
};

// Array: Una lista ordenada de valores.
let colorsList = ["rojo", "verde", "naranja", "amarillo"];
// console.log(colorsList);
// console.log(colorsList[1]); // Accede al elemento en la posición 1: "verde"
// console.log(colorsList[3]); // Accede al elemento en la posición 3: "amarillo"

/*
----------------------------------------------------------------
 2. VARIABLES Y CONSTANTES
----------------------------------------------------------------
*/

/* let: Permite declarar variables que pueden cambiar su valor. */
let lastName = "Apellido";
lastName = "Gonzalez"; // El valor de lastName ha sido reasignado.

/* const: Permite declarar constantes, cuyo valor no puede ser reasignado. */
const colors = ["rojo", "verde", "naranja", "amarillo"];
// colors = {}; // Esto daría un error, porque no se puede reasignar una constante.
// Sin embargo, sí se pueden modificar los elementos internos de un array u objeto constante.
colors.push("azul"); // Esto es válido.

/* --- Reglas para nombrar variables --- */

// No pueden empezar con un número.
// let 2name = "error"; // Inválido

// Pueden empezar con letras, guion bajo (_) o símbolo de dólar ($).
// let $button = document.query...; // Común para variables que guardan elementos de HTML.
let myVar = ""; // Válido

// No se pueden usar palabras reservadas del lenguaje.
// let class = "error"; // Inválido, 'class' es una palabra reservada.

/*
----------------------------------------------------------------
 3. OPERADORES
----------------------------------------------------------------
*/

let num1 = 10;
let num2 = 5;

/* --- A. Operadores Aritméticos --- */

// console.log(num1 + num2); // Suma: 15
// console.log(num1 - num2); // Resta: 5
// console.log(num1 * num2); // Multiplicación: 50
// console.log(num1 / num2); // División: 2
// console.log(num1 % num2); // Módulo (resto de la división): 0
// console.log(num1 ** num2); // Exponenciación: 100000

/* --- B. Operadores de Comparación (Siempre devuelven un boolean) --- */

// console.log("Igualdad estricta", num1 === num2);   // false
// console.log("Diferente de", num1 !== 10);        // false
// console.log("Mayor que", num1 > num2);           // true
// console.log("Mayor o igual que", num1 >= 11);    // false
// console.log("Menor que", num1 < num2);           // false
// console.log("Menor o igual que", num1 <= num2);  // false

/* --- C. Operadores Lógicos --- */

// && (AND): Devuelve true si ambas condiciones son verdaderas.
// || (OR):  Devuelve true si al menos una de las condiciones es verdadera.
// ! (NOT): Invierte el valor booleano.

// console.log(num1 > 5 || num1 < 9); // true || false -> true

/*
----------------------------------------------------------------
 4. ESTRUCTURAS DE CONTROL (CONDICIONALES)
----------------------------------------------------------------
*/

let age = 27;

/* --- if / else if / else --- */

// if(age >= 40){
//     console.log("La edad es igual o mayor a 40");
// } else if(age >= 30){
//     console.log("La edad es igual o mayor a 30");
// } else if(age >= 18){
//     console.log("La edad es igual o mayor a 18");
// } else {
//     console.log("No se cumplió ninguna condición");
// }

/* --- Operador Ternario --- */
// Es una forma corta de escribir un if/else.
// sintaxis:  condicion ? valor_si_es_true : valor_si_es_false

console.log(age > 26 ? "Sí es mayor" : "No es mayor");

// El ternario anterior es equivalente a:
// if(age > 26){
//     console.log("Sí es mayor");
// } else {
//     console.log("No es mayor");
// }

/* --- switch --- */
// Compara una variable con múltiples valores posibles.

let currentAge = 26;
switch (currentAge) {
  case 30:
    console.log("La edad es 30");
    break; // El 'break' es importante para salir del switch.
  case 25:
    console.log("La edad es 25");
    break;
  default:
    console.log("No cumplió ninguna condición de los 'case'");
}

/*
----------------------------------------------------------------
 5. FUNCIONES
----------------------------------------------------------------
*/

/* --- A. Función Declarada (function declaration) --- */
function sayHello() {
  console.log("Hola, me acabo de ejecutar");
}

/* --- B. Función de Flecha (arrow function) --- */
// Una sintaxis más moderna y concisa para escribir funciones.

// Función sin parámetros
const arrowSayHello = (name) => {
  // Usando template literals para insertar una variable en un string
  console.log(`Hola ${name}, me acabo de ejecutar`);
};

// Función con parámetros (con valores por defecto) y que retorna un valor.
const sumNumber = (num1 = 5, num2 = 6) => {
  return num1 + num2;
};

// Para usar las funciones, necesitas llamarlas (invocarlas):
// sayHello();
// arrowSayHello("Carlos");
// let resultado = sumNumber(10, 20); // resultado sería 30
// console.log(resultado);
