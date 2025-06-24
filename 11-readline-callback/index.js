
import { createInterface } from 'node:readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Cuál es tu nombre? ', (name) => {
    console.log(`Hola, ${name}`);
    rl.close();
});
