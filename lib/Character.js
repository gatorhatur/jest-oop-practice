class Character { 
    constructor(name = '') {
        this.name = name;
        this.health = Math.floor(Math.random() * 10 + 95);
        this.strength = Math.floor(Math.random() * 5 + 7);
        this.agility = Math.floor(Math.random() * 5 + 7);
    }

    getHealth() {
        return `${this.name}'s health is now ${this.health}!`
    };
    
    isAlive() {
        return (this.health > 0) ? true : false;
    };
    
    reduceHealth(damage) {
        this.health -= damage
       
        if (this.health < 0) {
            this.health = 0;
        }
    };
    
    getAttackValue() {
        const min = this.strength - 5;
        const max = this.strength + 5;
    
        return Math.floor(Math.random() * (max - min) + min);
    }
}



module.exports = Character;
