// Setup Game
const playGame = {
    startGame(name) {
        this.restart(name)
        this.characterSelect(name)
        console.log('game has started')
    },

    restart(name) {
        if(name == 'Aang'){
            player1 = characterIndex.airBender
            console.log(`Player 1 chose ${player1.name}`)
        }else if(name == 'Toph'){
            player1 = characterIndex.earthBender
            console.log('Player 1 chose Toph')
        }else if(name == 'Zuko'){
            player1 = characterIndex.fireBender
            console.log('Player 1 chose Zuko')
        }else if(name == 'Katara'){
            player1 = characterIndex.waterBender
            console.log('Player 1 chose Katara')
        }else{
            alert('error, character not selected')
            console.log('error, character not selected')
        }
        const characterSelect = document.querySelector('.characterSelect')
        characterSelect.innerHTML = `<img src="img/${player1.name}.png">`
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
const characterIndex = {
    airBender: new Player1('Aang', ['Kick', 'Wind Slash', 'Tornado'], 'air'),
    earthBender: new Player1('Toph', ['Punch', 'Stomp', 'Earthquake'], 'earth'),
    fireBender: new Player1('Zuko', ['Slash', 'Fireball', 'Lightning'], 'fire'),
    waterBender: new Player1('Katara', ['Slap', 'Water Whip', 'Tsunami'], 'water')
}


// console.log(airBender)
// console.log(earthBender)
// console.log(fireBender)
// console.log(waterBender)

// console.log(playGame.startGame(earthBender.name))