// Setup Game
const playGame = {
    startGame(name) {
        this.restart(name)
        this.characterSelect(name)
    },

    restart(name) {
        
    },

    characterSelect(name) {

    }
}


let player1
let player2

// typical character setup
class Player1 {
    constructor(name, attacks = [], element, health = 100, endurance = 100){
        this.name = name
        this.attacks = attacks
        this.element = element
        this.health = health
        this.endurance = endurance
    }

    playerAttack1() {
        return this.health - this.attacks[0]
    }

}

class Player2 {
    constructor(name, attacks = [], element, health = 100, endurance = 100){
        this.name = name
        this.attacks = attacks
        this.element = element
        this.health = health
        this.endurance = endurance
    }

    playerAttack1() {
        return this.health - this.attacks[0]
    }

}

// class Player1 extends Character {
//     constructor(){
//         super(name, health, attacks)
//     }
// }


// Setup character options
const airBender = new Player1('Aang', ['Kick', 'Wind Slash', 'Tornado'], 'air')
const earthBender = new Player1('Toph', ['Punch', 'Stomp', 'Earthquake'], 'earth')
const fireBender = new Player1('Zuko', ['Slash', 'Fireball', 'Lightning'], 'fire')
const waterBender = new Player1('Katara', ['Slap', 'Water Whip', 'Tsunami'], 'water')

console.log(airBender)
console.log(earthBender)
console.log(fireBender)
console.log(waterBender)