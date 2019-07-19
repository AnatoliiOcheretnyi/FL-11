class Fighter{
    constructor(data){
        this.name = data.name;
        this.damage = data.damage;
        this.hp = data.hp;
        this.maxHP = data.hp
        this.agility = data.agility;
        this.win = 0;
        this.loss = 0;
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
            console.log(`${this.getName} make ${this.getDamage} damage to ${defender.getName}`);
        } else{
            console.log(`${this.getName} attack missed`);
        }
    }
    heal(heal) {
        this.hp += heal;
        if(this.hp > this.maxHP){
            this.hp = this.maxHP
        }
        return console.log(`${this.getName} health is: ${this.getHealth}`);
    }
    dealDamage(damage){
        this.hp -= damage
        if(this.hp < 0){
            this.hp = 0
        } 
    }
    addWin(){
        this.win++;
    }
    
    addLose(){
        this.loss++;
    }
    logCombatHistory(){
        return console.log(`Name: ${this.getName} Wins: ${this.win}, Losses: ${this.loss}`);
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
            console.log(`${defenderFighter.getName} is dead and can't fight`);
        }
        if(defenderFighter.getHealth === 0){
            attackFighter.addWin();
            defenderFighter.addLose();
            console.log(`${attackFighter.getName} is dead and can't fight`);
        }
    }
}

const fighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const fighter2 = new Fighter({name: 'Jim', damage: 25, hp: 90, agility: 20});
