function addOne(x){
    return x + 1;
}

function pipe(number, ...pipeFunc){
    for(let i = 0; i < pipeFunc.length; i++){
        number = pipeFunc[i](number)
    }
    return number
}

pipe(1, addOne, addOne);
