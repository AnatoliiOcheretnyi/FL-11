function assign(target, ...listOfObjects) {
    listOfObjects.forEach(modify => {
        for (const key in modify) {
            if (modify.hasOwnProperty.bind(modify, key)) {
                target[key] = modify[key];
            }
        }
    });
    return target;
}


const first = {name: 'Anatolii', surname: 'undefined'};
const second = {surname: 'Ocheretnyi', age: 'not enough'};
const third = {age: 20}
const myPersonData = assign({}, first, second, third);
console.log(myPersonData);

const defaults = { a: 123, b: 777 };
const options = { a: 456 };
const configs = assign({}, defaults, options); // => {a: 456, b: 777}
console.log(configs);