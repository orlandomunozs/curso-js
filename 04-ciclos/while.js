// sumar 1 a todos los elementos del array
// tener siempre el cuidado de finalizar el while, que no se nos cicle

const arreglo = [0, 5, 8, 9];
// console.log(arreglo[0]);
// console.log(arreglo[3]);
const longitud = arreglo.length;
console.log(longitud);
let contador = 0;
while (contador < longitud) {
    arreglo[contador] = arreglo[contador] + 1;
    contador = contador + 1;
}
const nan = NaN;
console.log(typeof nan)
console.log(arreglo);
console.log('ENDED')