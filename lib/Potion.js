class Potion {
    constructor(name) {
        this.types = ['stength', 'agility', 'health'];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

        (this.name === 'health')
            ? this.value = Math.floor(Math.random() * 10 + 30)
            : this.value = Math.floor(Math.random() * 5 + 7)
    }
}



module.exports = Potion;