let startGame = confirm('Do you want to play a game?')
let playerNumber = null;
let price = 100;
let winPrice = 0;
let posiblePrice = 0;
let attempts = 3;
let three = 3;
let eight = 8;
let divide = 2;
let maxRange = 8;
let kof = 1;
let maxRangeRaise = 4;

if(startGame === false){
    alert('You did not become a billionaire, but can.');
}else{
    let randomNumber = Math.floor(Math.random(1) * maxRange);
    while(attempts >= 1){
        playerNumber = +prompt('enter your number')
        if(playerNumber === randomNumber){
            winPrice += price * kof;
            if (confirm('Congratulation, you won!\nYour prize is: ' + winPrice + '$' + '\nDo you want to play again?')){
                maxRange +=maxRangeRaise;
                kof++;
                attempts = three;
                randomNumber = Math.floor(Math.random(1) * maxRange);
            }else{
                alert('Thank you for your participation. Your prize is: ' + winPrice + '$');
                attempts = 0;
                if(confirm('Do you want to play again?')){
                    maxRange = eight;
                    kof = 1;
                    attempts = three;
                    randomNumber = Math.floor(Math.random(1) * maxRange);
                }
            }
         }else if(playerNumber !== randomNumber){
            attempts--;
            price /= divide;
            alert('Choose a roulette pocket number from 0 to ' + maxRange + '\nAttempts left: ' + attempts +
             '\nTotal prize: ' + winPrice + '$');
            if(attempts === 0){
                alert('Thank you for your participation. Your prize is: ' + winPrice + '$')
                if(confirm('Do you want to play again?')){
                    maxRange = eight;
                    kof = 1;
                    attempts = three;
                    randomNumber = Math.floor(Math.random(1) * maxRange);
                }
            }
         }
    }
}