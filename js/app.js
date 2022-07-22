// Setup Game
const playGame = {
    startGame(name) {
        this.characterSelect(name)
        this.loadGame(name)
        console.log('game has started')
    },

    characterSelect(name) {
        if(name == 'Aang'){
            player1 = characterIndex.airBender
            alert(`Player 1 chose ${player1.name}`)
            console.log(`Player 1 chose ${player1.name}`)
            // const attackList = document.querySelector('.attackList')
            // attackList.innerHTML = '<a href="#" class="loadFight" onclick = "playGame.startFight()">Start Fight!</a>'
        }else if(name == 'Toph'){
            player1 = characterIndex.earthBender
            alert(`Player 1 chose ${player1.name}`)
            console.log(`Player 1 chose ${player1.name}`)
            // const attackList = document.querySelector('.attackList')
            // attackList.innerHTML = '<a href="#" class="loadFight" onclick = "playGame.startFight()">Start Fight!</a>'
        }else if(name == 'Zuko'){
            player1 = characterIndex.fireBender
            alert(`Player 1 chose ${player1.name}`)
            console.log(`Player 1 chose ${player1.name}`)
            // const attackList = document.querySelector('.attackList')
            // attackList.innerHTML = '<a href="#" class="loadFight" onclick = "playGame.startFight()">Start Fight!</a>'
        }else if(name == 'Katara'){
            player1 = characterIndex.waterBender
            alert(`Player 1 chose ${player1.name}`)
            console.log(`Player 1 chose ${player1.name}`)
            // const attackList = document.querySelector('.attackList')
            // attackList.innerHTML = '<a href="#" class="loadFight" onclick = "playGame.startFight()">Start Fight!</a>'
        }else{
            alert('error, character not selected')
            console.log('error, character not selected')
        }
        const characterSelect = document.querySelector('.characterSelect')
        characterSelect.innerHTML = `<img src="img/${player1.name}.png">`
    },

    loadGame(name) {
        const header = document.querySelector('header')
        const attackList = document.querySelector('.attackList')
        const startGame = document.querySelector('.startGame')
        const level = document.querySelector('.gameLevel')
        // header.innerHTML = '<p>Load Game!</p>'
        startGame.innerHTML = '<a href="battle.html" class="startGame" onclick = "playGame.startFight()">Start Fight!</a>';
        level.style.visibility = 'visible'
    },

    startFight(){
        const header = document.querySelector('header')
        const attackList = document.querySelector('.attackList')
        const level = document.querySelector('.gameLevel')
        let player2 = getRandomCharacter(characterIndex)
        console.log(player2)
    },


    attackLight() {
        console.log(player1.attacks[0])
    }
}



let player1
let player2
// let header
// let attackList
// let level


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


const getRandomCharacter = (characterIndex) => {
    const keys = Object.keys(characterIndex)
    return keys[Math.floor(Math.random() * keys.length)]
}
// console.log(getRandomCharacter(characterIndex))

// console.log(airBender)
// console.log(earthBender)
// console.log(fireBender)
// console.log(waterBender)

// console.log(playGame.startGame(earthBender.name))

// healthbar setup
const canvas = document.querySelector('.healthBar')
const context = canvas.getContext("2d")
const width = canvas.width = 320
const height = canvas.width = 480

canvas.style.marginTop = window.innerHeight / 2 - height / 2 + "px"


class HealthBar{
    constructor(x, y, w, h, maxHealth, color){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.maxHealth = maxHealth
        this.maxWidth = w
        this.color = color
        this.health = maxHealth
        this.color = color
    }

    show(context) {
        context.lineWidth = 5
        context.strokeStyle = '#333'
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.w, this.h)
        context.strokeRect(this.x, this.y, this.maxWidth, this.h)
    }
}

const healthBar = new HealthBar(20, 20, 50, 30, 100, 'green')

const frame = () => {
    context.clearRect(0, 0, width, height)
    healthBar.show(context)
    requestAnimationFrame(frame)
    console.log('frame ani')
}

frame()