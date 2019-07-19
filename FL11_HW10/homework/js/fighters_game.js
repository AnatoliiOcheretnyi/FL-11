const private_data = new WeakMap();
class Fighter{
    constructor({name, damage, hp, agility}){
        const _private = new Map()
        .set('name', name)
        .set('damage', damage)
        .set('hp', hp)
        .set('maxHP', hp)
        .set('agility', agility);
        private_data.set(this, _private);
        this.win = 0;
        this.loss = 0;
    }
    get getName(){
        const _private = private_data.get(this);
        let name = _private.get('name');
        return name
    }
    get getDamage(){
        const _private = private_data.get(this);
        let damage = _private.get('damage');
        return damage
    }
    get getHealth(){
        const _private = private_data.get(this);
        let hp = _private.get('hp');
        return hp
    }
    get getMaxHp(){
        const _private = private_data.get(this);
        let maxHP = _private.get('maxHP');
        return maxHP
    }
    get getAgility(){
        const _private = private_data.get(this);
        let agility = _private.get('agility');
        return agility
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
        const _private = private_data.get(this);
        let hp = _private.get('hp');
        let maxHP = _private.get('maxHP');
        hp += heal;
        _private.set('hp', hp);
        if(hp > maxHP){
            hp = maxHP
            _private.set('hp', hp);
        }
        return console.log(`${this.getName} health is: ${this.getHealth}`);
    }
    dealDamage(damage){
        const _private = private_data.get(this);
        let hp = _private.get('hp');
        hp -= damage
        _private.set('hp', hp);
        if(hp < 0){
            hp = 0
            _private.set('hp', hp);
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
            console.log(`${attackFighter.getName} is dead and can't fight`);
        }
        if(defenderFighter.getHealth === 0){
            attackFighter.addWin();
            defenderFighter.addLose();
            console.log(`${defenderFighter.getName} is dead and can't fight`);
        }
    }
}
