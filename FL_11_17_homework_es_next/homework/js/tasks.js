const fetch = require("node-fetch");

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
let hideNumber = (phoneNumber) => (phoneNumber.slice(6)).padStart(10, '*')

const phoneNumber = '0123456789'
console.log(hideNumber(phoneNumber));

//task 7
let add = (a = 0, b = 0) => {
  if(!a || !b){
    throw Error('Missing property')
  }
  return a + b
}

console.log(add(1,3));

//task 8
let usersRepoList = (link) => {
  fetch(link)
  .then(response => response.json())
  .then(getData => {
    let listOfRepository = 
    (getData.map(repository => repository.name)).sort()
    console.log(listOfRepository);
  })
  .catch(err => {
    throw new Error('Something went wrong');
  });
}

usersRepoList('https://api.github.com/users/AnatoliiOcheretnyi/repos');

//task 9
async function userRepoList(link){
  try{
    const response = await fetch(link)
    const jsonData = await response.json()
    let listOfRepository = 
    (jsonData.map(repository => repository.name)).sort()
    console.log(listOfRepository);
  } catch (err) {
    throw new Error('Something went wrong');
  }
}
userRepoList('https://api.github.com/users/AnatoliiOcheretnyi/repos');
