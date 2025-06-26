console.log('Linea 2');
import { createInterface } from 'node:readline/promises';

console.log('Linea 5');
const rl = createInterface({ input: process.stdin, output: process.stdout });

console.log('Linea 8');
rl.question('¿Cuál es tu nombre?  ')
    .then(answer => {
        console.log('Linea 11');
        console.log(`Hola, ${answer}`);
        rl.close();
    });
console.log('Linea 15');
console.log('END');