'use strict';

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
}

const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
console.log(myFighter.getName)
console.log(myFighter.getAgility)
console.log(myFighter.getHealth)
console.log(myFighter.getDamage)