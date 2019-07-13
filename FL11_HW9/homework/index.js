function getNumbers(string){
    string = string.split('').map(Number).filter(Boolean);
    return string
}

console.log(getNumbers('n1um3ber95'));