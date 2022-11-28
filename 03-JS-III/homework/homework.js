// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
  // Imprime la suma de los números del 1 al 10
  // Pista: usa un acumulador
  // Tu código:
  var suma = 0;
  const nmrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  nmrs.forEach((e) => suma += e);
  return suma;
 

}

  function encuentraPares(array) {
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var pares = array.filter(a => a % 2 === 0);
  return pares;


}
console.log(encuentraPares([1,2,3,4,5,6,7,8,9,10]));


function elevaAlCuadrado(array) {
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  const alcuadrado = array.map( (c) => Math.pow(c,2));
  return alcuadrado;

}
console.log(elevaAlCuadrado([1,2,3,4,5,6,7,8,9,10]));

function sumaArray(array) {
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  let sumA = 0;
  array.forEach((s) => sumA += s);
  return sumA;
}

console.log(sumaArray([1,2,3,4,5,6,7,8,9,10]));

function numeroDigitos(num) {
  // Devuelve el número de dígitos de un número dado
  // Tu código:

  var nmrdigitos = num.toString();
  console.log(typeof nmrdigitos);
  var a = nmrdigitos.length;
  return a;

}
numeroDigitos(45);

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  imprimirSumaNumeros,
  encuentraPares,
  elevaAlCuadrado,
  sumaArray,
  numeroDigitos,
};
