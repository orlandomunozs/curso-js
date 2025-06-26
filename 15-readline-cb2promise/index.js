import { createInterface } from 'node:readline';
const rl = createInterface({ input: process.stdin, output: process.stdout, });
// const question = new Promise(resolve => {
//     rl.question('Cuál es tu nombre? ', (name) => {
//         return resolve(name);
//     });
// });

// const answer = await question;
// console.log(`Hola, ${answer}`);

// function question(query) {
//     return new Promise(resolve => {
//         rl.question(query, (name) => {
//             return resolve(name);
//         });
//     });
// }
const question = (query) => {
    return new Promise(resolve => {
        rl.question(query, (name) => {
            return resolve(name);
        });
    });
}

const answer = await question('Cuál es tu nombre? ');
console.log(`Hola, ${answer}`);
rl.close();

