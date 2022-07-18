// typical character setup
class Character {
    constructor(name, attacks = [], health = 100, endurance = 100){
        this.name = name
        this.attacks = attacks
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
const airBender = new Character('Aang', ['Kick', 'Wind Slash', 'Tornado'])
const earthBender = new Character('Toph', ['Punch', 'Stomp', 'Earthquake'])
const fireBender = new Character('Zuko', ['Slash', 'Fireball', 'Lightning'])
const waterBender = new Character('Katara', ['Slap', 'Water Whip', 'Tsunami'])

console.log(airBender)
console.log(earthBender)
console.log(fireBender)
console.log(waterBender)