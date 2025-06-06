// let a = 'a';
// console.log(a);
// let b = a;
// console.log(b);
// b = 'b';
// console.log(b);
// console.log(a);


// POR REFERENCIA
// const arr1 = [0, 1, 2];
// console.log('arr1', arr1);
// const arr2 = arr1;
// console.log('arr2', arr2);
// arr2.push(3);
// console.log('arr2', arr2);
// console.log('arr1', arr1);


// POR COPIA, sólo copia los primitivos
// const arr3 = [0, 1, 2, [0, 1]];
// console.log('arr3', arr3);
// const arr4 = [...arr3];
// console.log('arr4', arr4);
// arr4.push(3);
// arr4[3].push(2);
// console.log('arr4', arr4);
// console.log('arr3', arr3);

// POR COPIA

const arr3 = [0, 1, 2, [0, 1]];
console.log('arr3', arr3);
const arr4 = JSON.parse(JSON.stringify(arr3));
console.log('arr4', arr4);
arr4.push(3);
arr4[3].push(2);
console.log('arr4', arr4);
console.log('arr3', arr3);


