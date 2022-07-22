// Setup Game
const playGame = {
    startGame(name) {
        this.characterSelect(name)
        // this.loadGame(name)
        console.log('game has started')
    },

    characterSelect(name) {
        if(name == 'Aang'){
            player1 = characterIndex.airBender
            alert(`Player 1 chose ${player1.name}`)
            console.log(`Player 1 chose ${player1.name}`)
            const attackList = document.querySelector('.attackList')
            attackList.innerHTML = '<a href="#" class="loadFight" onclick = "playGame.startFight()">Start Fight!</a>'
        }else if(name == 'Toph'){
            player1 = characterIndex.earthBender
            alert(`Player 1 chose ${player1.name}`)
            console.log(`Player 1 chose ${player1.name}`)
            const attackList = document.querySelector('.attackList')
            attackList.innerHTML = '<a href="#" class="loadFight" onclick = "playGame.startFight()">Start Fight!</a>'
        }else if(name == 'Zuko'){
            player1 = characterIndex.fireBender
            alert(`Player 1 chose ${player1.name}`)
            console.log(`Player 1 chose ${player1.name}`)
            const attackList = document.querySelector('.attackList')
            attackList.innerHTML = '<a href="#" class="loadFight" onclick = "playGame.startFight()">Start Fight!</a>'
        }else if(name == 'Katara'){
            player1 = characterIndex.waterBender
            alert(`Player 1 chose ${player1.name}`)
            console.log(`Player 1 chose ${player1.name}`)
            const attackList = document.querySelector('.attackList')
            attackList.innerHTML = '<a href="#" class="loadFight" onclick = "playGame.startFight()">Start Fight!</a>'
        }else{
            alert('error, character not selected')
            console.log('error, character not selected')
        }
        const loadLevel = document.querySelector('.characterSelect')
        loadLevel.innerHTML = `<img src="img/${player1.name}.png">`
    },

    // loadGame(name) {
    //     header = document.querySelector('header')
    //     attackList = document.querySelector('.attackList')
    //     level = document.querySelector('.level')
    // },

    startFight(){

    },


    attackLight() {
        console.log(player1.attacks[0])
    }
}



let player1
let player2
let header
let attackList
let level


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