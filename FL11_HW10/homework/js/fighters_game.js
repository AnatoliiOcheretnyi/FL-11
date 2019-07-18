const gameResults = {wins: 0, loss: 0};

class Fighter{
    constructor(data){
        this.name = data.name;
        this.damage = data.damage;
        this.hp = data.hp;
        this.maxHP = data.hp
        this.agility = data.agility;
    }
    get getName(){
        return this.name
    }
    get getDamage(){
        return this.damage
    }
    get getHealth(){
        return this.hp
    }
    get getAgility(){
        return this.agility
    }
    atack(defender){
        let maxPosibilityOfAtack = 100;
        let posibilityOfAtack = maxPosibilityOfAtack - defender.getAgility;
        let chanceOfAtack = Math.floor(Math.random() * maxPosibilityOfAtack)
        if(posibilityOfAtack > chanceOfAtack){
            defender.dealDamage(this.getDamage);
            console.log(`${this.name} make ${this.damage} damage to ${defender.name}`);
        } else{
            console.log(`${this.name} attack missed`);
        }
    }
    heal(heal) {
        this.hp += heal;
        if(this.hp > this.maxHP){
            this.hp = this.maxHP
        }
        return console.log(`${this.name} has HP: ${this.hp}`);
    }
    dealDamage(damage){
        this.hp -= damage
        if(this.hp < 0){
            this.hp = 0
        } 
    }
    addWin(){
        return gameResults.wins++;
    }
    addLose(){
        return gameResults.loss++;
    }
    logCombatHistory(){
        return console.log(`Name: ${this.name} Wins: ${this.addWin()}, Losses: ${this.addLose()}`);
    }
}

function battle(attackFighter, defenderFighter){
    while(attackFighter.getHealth > 0 && defenderFighter.getHealth > 0){
        if(attackFighter.getHealth > 0){
            attackFighter.atack(defenderFighter)
        }
        if(defenderFighter.getHealth > 0){
            defenderFighter.atack(attackFighter)
        }
        if(attackFighter.getHealth === 0){
            defenderFighter.addWin();
            attackFighter.addLose();
            console.log(`${defenderFighter.getName} win!`);
        }
        if(defenderFighter.getHealth === 0){
            attackFighter.addWin();
            defenderFighter.addLose();
            console.log(`${attackFighter.getName} win!`);
        }
    }
}

const fighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const fighter2 = new Fighter({name: 'Jim', damage: 25, hp: 90, agility: 20});

battle(mario, luigi)
mario.logCombatHistory()
luigi.logCombatHistory()
