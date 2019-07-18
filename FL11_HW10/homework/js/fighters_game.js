const gameResults = {loss: 0, wins: 0};

class Fighter{
    constructor(data){
        this.name = data.name;
        this.damage = data.damage;
        this.hp = data.hp;
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
            console.log('${this.name} make ${this.damage} damage to ${defender.name}');
        } else{
            console.log('${this.name} attack missed');
        }
    }

    logCombatHistory(){
        return console.log('Name: ${this.name}, Wins: ${addWin}, Losses: ${addLose}');
    }

    heal(heal) {
        this.hp += heal;
        if(this.hp > 110){
            this.hp = 110
        }
        return console.log(`${this.name} has HP: ${this.hp}`);
    }

    dealDamage(){
        
    }
}

const fighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const fighter2 = new Fighter({name: 'Jim', damage: 25, hp: 90, agility: 20});
console.log(fighter1.heal(50));
