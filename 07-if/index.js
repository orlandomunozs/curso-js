/** Sabes si una persona es
 * bebe 0-4 años
 * niño(a) 5-13
 * Adolecente 14-17
 * Adulto joven 18-35
 * Adulto 35-64
 * Tercera edad >= 65 
 */
const edad = 19;

if(edad > 0 && edad < 15) {

}

if (edad > 0 || edad === 0 && edad < 4 || edad === 4) {
    console.log('Es un bebe')
} else {
    console.log('No es un bebe') // Angel, Alan, FEr
}

// if (edad >= 0 && edad <= 4) {
//     console.log('Es bebe')
// } else if (edad >= 5 && edad <= 13) {
//     console.log('Es niño');
// } else if (edad >= 14 && edad <= 17) {
//     console.log('Es adolecente')
// } else if (edad >= 18 && edad <= 35) {
//     console.log('Es adulto joven')
// } else if (edad >= 35 && edad <= 64) {
//     console.log('Es adulto')
// } else if (edad >= 65) {
//     console.log('Es tercera edad')
// } else {
//     console.log('Edad incorrecta')
// }

// if (edad === 18) {
//     console.log("Felicidades acabas de ser adulto")
// }




// const a = 2 / (2 + (2 + 3)) - 8 * 3 ;
// // 18

// console.log(a);

// const gastos = 0;
// if (gastos === 0 || gastos) {

// } else {
//     console.log('Falta el gasto')
// }

// // if (name !== null && name !== undefined && typeof name === 'string' && name.length) {
// //     console.log('Gracias')
// // } else {
// //     console.log('Favor de intrucir el nombre')
// // }
