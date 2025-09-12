/*
================================================================
 MÉTODOS DE ARRAYS Y OBJETOS EN JAVASCRIPT - GUÍA DE REFERENCIA
================================================================
*/

/*
----------------------------------------------------------------
 1. ARRAYS: PROPIEDADES Y MÉTODOS
----------------------------------------------------------------
*/

/* --- A. Propiedad .length --- */
// Muestra o modifica el número de elementos en un array.
// const listNumbers = [10,20,30,40,50];
// console.log(listNumbers.length); // 5
// console.log(listNumbers[4]); // 50

// // Modificar .length puede truncar o extender el array
// listNumbers.length = 2;
// console.log(listNumbers); // [10, 20]

// listNumbers.length = 6;
// console.log(listNumbers); // [10, 20, <4 empty items>]

/* --- B. Métodos Mutables (Modifican el array original) --- */

const mutableList = [10, 20, 30, 40, 50];

// .push(): Añade uno o más elementos al FINAL del array.
mutableList.push(60, 70);
// console.log(mutableList); // [10, 20, 30, 40, 50, 60, 70]

// .unshift(): Añade uno o más elementos al INICIO del array.
mutableList.unshift(-20, -10, 0);
// console.log(mutableList); // [-20, -10, 0, 10, 20, 30, 40, 50, 60, 70]

// .pop(): Elimina y RETORNA el ÚLTIMO elemento del array.
// const deletedItem = mutableList.pop();
// console.log(mutableList);
// console.log(`Valor eliminado: ${deletedItem}`);

// .shift(): Elimina y RETORNA el PRIMER elemento del array.
// const deletedFirstElement = mutableList.shift();
// console.log(mutableList);
// console.log(`Valor eliminado: ${deletedFirstElement}`);

// .splice(inicio, cant_a_eliminar, ...items_a_insertar): Método poderoso para modificar el array.
// mutableList.splice(1, 0, "A", "B", "C"); // Inserta "A", "B", "C" en el índice 1 sin eliminar nada.
// console.log(mutableList);

// .reverse(): Invierte el orden de los elementos.
mutableList.reverse();
// console.log(mutableList);

// .sort(): Ordena los elementos.
// Para strings, ordena alfabéticamente.
const chars = ["b", "m", "a", "c"];
chars.sort();
// console.log(chars); // ["a", "b", "c", "m"]

// Para números, se necesita una función de comparación para ordenar correctamente.
const anotherListNumber = [10, 6, 1000, 45, 12];
anotherListNumber.sort((a, b) => a - b); // Orden ascendente
// console.log(anotherListNumber); // [6, 10, 12, 45, 1000]

/* --- C. Métodos Inmutables (NO modifican el array original, devuelven uno nuevo) --- */

const arrayChars1 = ["A", "B", "Manzana"];
const arrayChars2 = ["C", "D", "Uva"];

// .concat(): Une dos o más arrays y devuelve un nuevo array.
const combinedArray = arrayChars1.concat(arrayChars2);
// console.log(combinedArray); // ["A", "B", "Manzana", "C", "D", "Uva"]

// .slice(inicio, fin): Devuelve una copia superficial de una porción del array.
// console.log(combinedArray.slice(3, 5)); // ["C", "D"]

// .indexOf(elemento): Devuelve el primer índice donde se encuentra un elemento. Devuelve -1 si no lo encuentra.
// console.log(combinedArray.indexOf("Uva")); // 5
// console.log(combinedArray.indexOf("Pera")); // -1

// .lastIndexOf(elemento): Devuelve el último índice donde se encuentra un elemento.
const repeatedElements = ["A", "B", "C", "B", "A"];
// console.log(repeatedElements.lastIndexOf("B")); // 3

// .join(separador): Une todos los elementos del array en un string.
// console.log(combinedArray.join(" - ")); // "A - B - Manzana - C - D - Uva"

/* --- D. Métodos de Iteración (Recorren el array) --- */

const listNames = [
  { name: "Alejandro" },
  { name: "Gabino" },
  { name: "Facundo" },
  { name: "Jesus" },
];
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// .map(callback): Crea un NUEVO array aplicando una función a cada elemento.
// const result = arrayNumbers.map(number => ({
//     name: number,
//     valueToTen: number * 10
// }));
// console.log(result);

// .filter(callback): Crea un NUEVO array con los elementos que cumplen una condición.
// const result = listNames.filter(objName => objName.name.includes("F"));
// console.log(result); // [{ name: "Facundo" }]

// .find(callback): Devuelve el PRIMER elemento que cumple una condición. Si no, undefined.
// const result = listNames.find(objName => objName.name.includes("a"));
// console.log(result); // { name: "Alejandro" }

// .some(callback): Devuelve true si AL MENOS UN elemento cumple la condición.
// const result = listNames.some(objName => objName.name.includes("J"));
// console.log(`Resultado de .some(): ${result}`); // true

// .every(callback): Devuelve true si TODOS los elementos cumplen la condición.
// const result = listNames.every(objName => objName.name.length > 2);
// console.log(`Resultado de .every(): ${result}`); // true

// .reduce(callback, valorInicial): Reduce el array a un único valor.
// const result = arrayNumbers.reduce((acumulador, valorActual) => {
//     return acumulador + valorActual;
// }, 0); // 0 es el valor inicial del acumulador
// console.log(result); // 45

/*
----------------------------------------------------------------
 2. DESESTRUCTURACIÓN Y OPERADOR DE PROPAGACIÓN (SPREAD)
----------------------------------------------------------------
*/

/* --- A. Desestructuración de Arrays --- */
const fruits = ["Manzana", "Pera", "Uva", "Banana"];

// Asignar elementos de un array a variables.
// const [firstFruit, secondFruit] = fruits;
// console.log(firstFruit); // Manzana
// console.log(secondFruit); // Pera

// Usando el operador de resto (...) para agrupar los elementos restantes.
// const [firstFruit, secondFruit, ...restOfFruits] = fruits;
// console.log(restOfFruits); // ["Uva", "Banana"]

// Desestructuración de arrays anidados.
const coord = [
  [10, 30],
  [40, 40],
  [50, 50],
];
const [[firstValue, secondValue]] = coord;
// console.log(firstValue, secondValue); // 10 30

/* --- B. Operador de Propagación (...) en Arrays --- */

// Para concatenar arrays.
// const combinedArray2 = [...arrayChars1, ...arrayNumbers];
// console.log(combinedArray2);

// Para crear copias de arrays.
const originalArray = [1, 2, 3, { a: 4 }];

// Copia superficial (Shallow copy): Solo copia el primer nivel. Los objetos anidados se pasan por referencia.
const shallowCopy = [...originalArray];
// shallowCopy[0] = 100;
// shallowCopy[3].a = 99; // Esto modifica también el array original.
// console.log("Original:", originalArray); // [1, 2, 3, { a: 99 }]
// console.log("Copia superficial:", shallowCopy); // [100, 2, 3, { a: 99 }]

// Copia profunda (Deep copy): Crea una copia completamente independiente.
const deepCopy = JSON.parse(JSON.stringify(originalArray));
// deepCopy[3].a = 555; // Esto NO modifica el array original
// console.log("Original:", originalArray); // [1, 2, 3, { a: 4 }]
// console.log("Copia profunda:", deepCopy); // [1, 2, 3, { a: 555 }]

/*
----------------------------------------------------------------
 3. OBJETOS
----------------------------------------------------------------
*/

/* --- A. Desestructuración y Operador de Propagación en Objetos --- */
const product = { name: "Laptop", price: 99.99, available: false };
const review = { user1: "Llego mal", user2: "Llego a tiempo", price: 150 };

// Desestructuración de objetos.
// const { name, price } = product;
// console.log(name, price); // Laptop 99.99

// Operador de propagación para unir objetos.
// Si hay propiedades repetidas, la del último objeto prevalece.
const fullProductInfo = { ...product, ...review };
// console.log(fullProductInfo); // { name: "Laptop", price: 150, available: false, user1: "Llego mal", user2: "Llego a tiempo" }

/* --- B. Métodos para Trabajar con Objetos --- */

// Comprobar si una propiedad existe.
// console.log(product.hasOwnProperty('name')); // true
// console.log('available' in product); // true

// Object.keys(): Devuelve un array con las claves (propiedades) del objeto.
const keysProduct = Object.keys(product);
// console.log(keysProduct); // ["name", "price", "available"]
// keysProduct.forEach(key => console.log(product[key])); // Itera para obtener los valores

// Object.values(): Devuelve un array con los valores del objeto.
const valuesProduct = Object.values(product);
// console.log(valuesProduct); // ["Laptop", 99.99, false]

// Object.entries(): Devuelve un array de arrays, donde cada subarray es [clave, valor].
// console.log(Object.entries(product)); // [["name", "Laptop"], ["price", 99.99], ["available", false]]

/* --- C. Inmutabilidad de Objetos --- */
const user = { id: 10, name: "John", lastName: "Doe", age: 60 };

// Object.seal(): No permite añadir ni eliminar propiedades, pero SÍ permite modificar las existentes.
// Object.seal(user);
// user.rol = "ADMIN"; // No se añade
// user.age = 50;      // Sí se modifica
// delete user.id;     // No se elimina
// console.log(user);

// Object.freeze(): Congela el objeto. No se pueden añadir, eliminar NI modificar propiedades.
// Object.freeze(user);
// user.rol = "ADMIN"; // No se añade
// user.age = 50;      // NO se modifica
// console.log(user);
