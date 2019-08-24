// task 1
let maxElement = (arr) => Math.max(...arr);

const array = [1, 2, 5, 1]

console.log(maxElement(array));

// task 2
let coppyArray = (arr) => newArr = [...arr];
let copiedArray = coppyArray(array)
console.log(copiedArray);
console.log(array === copiedArray);

// task 3
let addUniqueId = (object) => {
    let newObj = {...object}
    let objID = Symbol('_id:111341871')
    newObj.id = objID
    return newObj
};

let myProfile = {name: 'Anatolii', age: 20};
console.log(addUniqueId(myProfile));
console.log(myProfile);

//task 4
let regroupObject = (object) => {
    let{name, details} = object;
    let{university, ...user} = {name, ...details};
    let{age, firstName = name, id} = user;
    user = {age, firstName, id};
    
    return {university, user};
  }

const oldObj = {name: 'Someone', details: {id: 1, age: 11, university: 'UNI'}}
console.log(regroupObject(oldObj));

//task 5
let findUniqueElements = (arr) => [...new Set(arr)];

console.log(findUniqueElements(array));

//task 6