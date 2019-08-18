function Hamburger(type, calories, isSecretAdd = false) {
    const cheese = 120;
    const tomato = 20;
    const tomatoCaunt = 2;
    const secretIngredient = 100;

    let calorii= calories;
    let isCheese = false;
    let tomatos = 0;
    let deniedSecret = isSecretAdd;
    let isSecret = isSecretAdd;
    let deniedToAdd = false;
    let bitCount = 0;

    this.type = type;
  
    this.getCalories = function() {
      return calorii;
    };
  
    this.setCalories = function(calories) {
      calorii= calories;
    };
  
    this.addCheese = function() {
      if (deniedToAdd) {
        console.log('Sorry, you can not add chees');
        return false;
      }
      if (!isCheese) {
        calorii+= cheese;
        isCheese = true;
        deniedSecret = true;
      } else {
        console.log('Sorry, you can add cheese only once');
      }
    };
  
    this.addTomato = function() {
      if (deniedToAdd) {
        console.log('Sorry, you can not add tomato!');
        return false;
      }
      if (tomatos < tomatoCaunt) {
        tomatos++;
        calorii+= tomato;
        deniedSecret = true;
      } else {
        console.log('Sorry, you can add cheese only twice!');
      }
    };
  
    this.addSecretIngredient = function() {
      if (deniedToAdd) {
        console.log('Sorry, you can not add secret ingredient');
        return false;
      }
      if (!deniedSecret) {
        calorii+= secretIngredient;
        deniedSecret = true;
        isSecret = true;
      } else if (isSecret) {
        console.log('Sorry, you can add secret ingredient only once');
      } else {
        console.log('Sorry, you can add secret ingredient only before another ingredient');
      }
    };
  
    this.bite = function() {
      deniedToAdd = true;
      bitCount++;
    };
  
    this.info = function() {
      let hambName = `${this.type} hamburger: \n`;
      let countOfBit = `number of bits ${bitCount}, \n`;
      let totalCalories = `total calories: ${calorii} \n`;
      if(isSecret){
          withSecret = 'with secret ingredient , \n'
      } else {withSecret = 'without secret ingredient , \n'}
      if(isCheese){
        withCheese = 'with cheese , \n'
      } else {withCheese = 'without cheese , \n'}
      if(tomatos){
        withTomato = `with ${tomatos} tomato , \n`
      } else {withTomato = ' without tomato , \n'}
      return `${hambName} ${withSecret} ${withCheese} ${withTomato} ${countOfBit} ${totalCalories}`;
    }
  }

//happy case
const burger = new Hamburger('classic', 650, true);
burger.addCheese();
burger.addTomato();
burger.addTomato();
burger.bite();
burger.bite();
burger.bite();
burger.bite();
console.log(burger.info());

//case 2
const cheeseburger = new Hamburger('cheesy', 900, false);
cheeseburger.addTomato();
cheeseburger.addCheese();
cheeseburger.addCheese();
cheeseburger.addSecretIngredient();
cheeseburger.bite();
console.log(cheeseburger.info());

//case 3
const bittenBurger = new Hamburger('bitten', 220);
bittenBurger.bite();
bittenBurger.addTomato();
bittenBurger.addCheese();
console.log(bittenBurger.info());

//case 4
const extraBurger = new Hamburger('extra', 1200, true);
extraBurger.calories = 350;
extraBurger.addSecretIngredient();
extraBurger.addTomato();
extraBurger.addCheese();
extraBurger.bite();
extraBurger.addTomato();
extraBurger.bite();
extraBurger.bite();
console.log(extraBurger.info());

