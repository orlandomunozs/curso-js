const name = 'Orlando'; // constante, no varía en el tiempo
let fullName = 'Orlando Muñoz'; // variable, varía en el tiempo
// console.log(name);
fullName = 'Orlando Muñoz S';
// console.log(fullName);

console.log(typeof fullName)
fullName = 2;
console.log(typeof fullName)

fullName = false;
console.log(typeof fullName)


// Tipos de datos

// primitivos
let text = 'Texto';
let number = 9;
let bool = false;
let date = new Date();

//otros
let a; // undefined
let b = undefined;
console.log('typeof a', typeof a)

let c = null;
console.log('typeof c', typeof c)

// no primitivos
const d = [0, 8, 6, 7, true, 'string']; // arreglo

console.log('typeof d', typeof d)
console.log('isArray', Array.isArray(d))

const e = [[1, 2, 3], [4, 5, 6]]; // arreglo de arreglos

const f = {
    name: 'Orlando',
    lastName: 'Muñoz',
    createdAt: new Date(),
    list: [0, 1, 1],
    user: {
        email: 'orlando.munoz@..',
        password: '0tfhjk'
    }
};

console.log('typeof f', typeof f)
