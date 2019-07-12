function reverseNumber(number) {
    let result = 0;
    let negativeNumber = number < 0;
    number = Math.abs(number);
    while (number) {
      result = result * 10 + number % 10;
      number = Math.floor(number / 10);
    }
    if(negativeNumber){
        result *= -1
    }
    return result;
}

reverseNumber(-123);


