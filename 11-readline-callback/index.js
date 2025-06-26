console.log('Lienea 2');
import { createInterface } from 'node:readline';
console.log('Lienea 4');
const rl = createInterface({ input: process.stdin, output: process.stdout, });
console.log('Lienea 6');
rl.question('Cuál es tu nombre? ', (name) => {
    console.log('Lienea 8');
    console.log(`Hola, ${name}`);
    console.log('Lienea 10');
    rl.close();
});
console.log('Lienea 13');
console.log('END');
