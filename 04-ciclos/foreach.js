const arreglo = [0, 5, 8, 9];


// arreglo.forEach(function (value, index) {
//     // console.log('index', index);
//     // console.log('value', value);
//     arreglo[index] = value + 1;
// });
// console.log(arreglo);



// arreglo.map((value, index) => {
//     return value + 1
// });

// realidad
// const arreglo2 = arreglo.map((value, index) => value + 1);
const arreglo2 = arreglo.map(value => value + 1);

console.log(arreglo2);