// typical character setup
class Character {
    constructor(name, attacks = [], element, health = 100, endurance = 100){
        this.name = name
        this.attacks = attacks
        this.element = element
        this.health = health
        this.endurance = endurance
    }
}

// class Player1 extends Character {
//     constructor(){
//         super(name, health, attacks)
//     }
// }


// Setup character options
const airBender = new Character('Aang', ['Kick', 'Wind Slash', 'Tornado'], 'air')
const earthBender = new Character('Toph', ['Punch', 'Stomp', 'Earthquake'], 'earth')
const fireBender = new Character('Zuko', ['Slash', 'Fireball', 'Lightning'], 'fire')
const waterBender = new Character('Katara', ['Slap', 'Water Whip', 'Tsunami'], 'water')

console.log(airBender)
console.log(earthBender)
console.log(fireBender)
console.log(waterBender)