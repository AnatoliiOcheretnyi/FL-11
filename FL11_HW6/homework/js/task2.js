let first = +prompt('enter length of AB');
let second = +prompt('enter length of BC');
let third = +prompt('enter length of AC');

if(isNaN(first) || isNaN(second) || isNaN(third)){
    console.log('please enter only numbers');
}else if(first + second < third || second + third < first || first + third < second){
    console.log('Triangle doesn’t exist');
}else if(first === second && second === third){
    console.log('Eequivalent triangle');
}else if(first === second || first === third || second === third){
    console.log('Isosceles triangle');
}else{
    console.log('Normal triangle');
}