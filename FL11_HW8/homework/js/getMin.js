function getMin(){
    let minNumber = arguments[0];
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] < minNumber){
            minNumber = arguments[i]
        }
    }
    return minNumber
}


getMin(3, 0, -3);
