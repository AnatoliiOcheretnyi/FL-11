// task 1
let maxElement = (...arr) => Math.max(...arr);

const array = [1, 2, 5, 1]

console.log(maxElement(...array));

// task 2
let coppyArray = (arr) => newArr = [...arr];
let copiedArray = coppyArray(array)
console.log(copiedArray);
console.log(array === copiedArray);


