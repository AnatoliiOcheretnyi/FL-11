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
