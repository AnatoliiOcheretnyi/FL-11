function reverseNumber(number) {
    let result = 0;
    let kof = 1;
    if(number < 0){
      kof = -1
  }
    number = Math.abs(number);
    while (number) {
      result = result * 10 + number % 10;
      number = Math.floor(number / 10);
    }
    return result * kof;
}

reverseNumber(-123);
