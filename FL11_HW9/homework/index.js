function getNumbers(string){
    let numberMass = [], newMass = [];
    for(let i = 0; i < string.length; i++){
        newMass.push(string.substr([i], 1))
    }
    for(let i of newMass){
        i = +i;
        if(!isNaN(i)){
            numberMass.push(i);
        }
    }
    return numberMass;
}

function findTypes(){
    let mass = {};
    let element;
    for(let i = 0; i < arguments.length; i++){
        element = typeof arguments[i]
        if(mass.hasOwnProperty(element)){
            mass[element] += 1
        }else{
            mass[element] = 1
        }
    }
    return mass
}

function executeforEach(arr, func){
    for(let i = 0; i < arr.length; i++){
        func(arr[i])
    }
}

function mapArray(arr, func){
    let mass = [];
    executeforEach(arr, function (transform) {
        mass.push(func(transform));
    });
    return mass;
}

function filterArray(arr, func){
    let mass = [];
    executeforEach(arr, function (filter) {
        if(func(filter)) {
            mass.push(filter)
        }
    });
    return mass;
}

function showFormattedDate(date) {
    let options = { month: 'short', day: '2-digit'};
    const formatDate = date.toLocaleDateString('en-us', options);
    return '\'' + 'Date: ' + formatDate + ' ' + date.getFullYear() + '\'';
  }

function canConvertToDate(string){
    let possibleDate = new Date(string);
    return !isNaN(possibleDate);
  }
  
  console.log(canConvertToDate('2016-13-18T00:00:00'));
