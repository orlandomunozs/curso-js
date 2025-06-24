// const dayNumber = 3;

// let dayName;

// if (dayNumber === 1) {
//     dayName = 'Lunes';
// } else if (dayNumber === 2) {
//     dayName = 'Martes';
// } else if (dayNumber === 3) {
//     dayName = 'Miercóles';
// } else if (dayNumber === 4) {
//     dayName = 'Jueves';
// } else if (dayNumber === 5) {
//     dayName = 'Viernes';
// } else if (dayNumber === 6) {
//     dayName = 'Sábado';
// } else if (dayNumber === 7) {
//     dayName = 'Domingo';
// }

// console.log(dayName);



const dayNumber = 3;

let dayName;

switch (dayNumber) {
    case 1:
        dayName = 'Lunes';
        break;
    case 2:
        dayName = 'Martes';
        break;
    case 3:
        dayName = 'Miercóles';
        break;
    case 4:
        dayName = 'Jueves';
        break;
    case 5:
        dayName = 'Viernes';
        break;
    case 6:
        dayName = 'Sábado';
        break;
    case 7:
        dayName = 'Domingo';
        break;
    default:
        dayName = 'Día no válido';
}

console.log(dayName);
