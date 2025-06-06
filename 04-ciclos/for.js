const arreglo = [0, 5, 8, 9];

const longitud = arreglo.length;

for (let contador = 1; contador < longitud; contador++) {
    arreglo[contador] = arreglo[contador] + 1;
}
console.log(arreglo);