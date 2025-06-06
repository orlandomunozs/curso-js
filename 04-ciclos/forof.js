const arreglo = [0, 5, 8, 9];
const longitud = arreglo.length;
// for (const [index, valor] of arreglo.entries()) {
//     // console.log('index', index);
//     // console.log('valor', valor);
// }
let contador = 0;
for (const valor of arreglo) {
    arreglo[contador] = valor + 1;
    contador++;
    // console.log('index', index);
    // console.log('valor', valor);
}

console.log(arreglo);