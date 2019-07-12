function reverseNumber(number) {
    let n, 
    res = 0;

    while(number) {
        n = number % 10;
        res = (res * 10) + n;
        number = number / 10 | 0;
    }
    
    return res;
}

console.log(reverseNumber(-123));
