import { createInterface } from 'node:readline/promises';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const answer = await rl.question('¿Cuál es tu nombre? ');
console.log(`Hola, ${answer}`);
rl.close();










