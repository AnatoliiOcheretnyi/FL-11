function objectCreate(prototype, properties){
    let createdObject = {};
    Object.setPrototypeOf(createdObject, prototype);
    for (const key in properties) {
        if (properties.hasOwnProperty.bind(properties ,key)) {
            createdObject[key] = properties[key]; 
        }
    }
    return createdObject;
}

const obj1 = { prop: 5 };
const obj2 = objectCreate(obj1);
console.log(Object.getPrototypeOf(obj2) === obj1); // => true
console.log(obj2.prop); // => 5

let data = objectCreate(null);
data.text = 'Привіт';
console.log(data.text); // Прівет
console.log(data.toString); // undefined