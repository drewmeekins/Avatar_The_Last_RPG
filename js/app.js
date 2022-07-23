// import healthbar
// import { canvas } from './healthbar'

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
        const player1Image = document.querySelectorAll('.player1Image')
        player1Image.innerHTML = `<img src="img/${player1.name}.png">`
    },

    // setup attacks
    

    loadGame(name) {
        const header = document.querySelector('header')
        const attackList = document.querySelector('.attackList')
        const startGame = document.querySelector('.startGame')
        const level = document.querySelector('.gameLevel')
        // header.innerHTML = '<p>Load Game!</p>'
        startGame.innerHTML = '<a href="#" class="startGame" onclick = "playGame.startFight()">Start Fight!</a>';
        level.style.visibility = 'visible'
    },

    startFight(){
        const header = document.querySelector('header')
        const attackList = document.querySelector('.attackList')
        const level = document.querySelector('.gameLevel')
        const battle = document.querySelector('.battle')
        const startUp = document.querySelector('.startUp')
        battle.style.visibility = 'visible'
        startUp.style.display = 'none'
        let player2 = getRandomCharacter(characterIndex)
        // let player2name = getRandomCharacter(characterIndex.)
        console.log(player2)
        const characterImage = document.querySelector('.player1')
        characterImage.innerHTML = `<div class="player1Image">
                <img src="img/${player1.name}.png" id="player1Image">
            </div>`
        // cloning and fliping the battle hud
        // const cloneBattle = battle.cloneNode(true)
        // cloneBattle.id('cloneBattle')
        // cloneBattle.classList.add('cloneBattle')
        // battle.after(cloneBattle)
        const player1Name = document.querySelector('.player1Name')
        player1Name.innerHTML = `${player1.name}`

        // attack layouts        
        // const lightAttack = document.querySelector('.lightAttack')
        // lightAttack.addEventListener('click', attackLightAir())

        
        // if else statements for player2
        if(characterIndex.airBender.name == 'Aang'){
            player2 = characterIndex.airBender
            alert(`Player 1 is fighting ${characterIndex.airBender.name}`)
            console.log(`Player 2 chose ${characterIndex.airBender.name}`)
            const player2Name = document.querySelector('.player2Name')
            player2Name.innerHTML = `${player2.name}`
            const character2Image = document.querySelector('.player2Image')
            character2Image.innerHTML = `<div class="player2Image">
                <img src="img/${characterIndex.airBender.name}.png" id="player2Image">
            </div>`
            // const attackList = document.querySelector('.attackList')
            // attackList.innerHTML = '<a href="#" class="loadFight" onclick = "playGame.startFight()">Start Fight!</a>'
        }else if(characterIndex.earthBender.name == 'Toph'){
            player2 = characterIndex.earthBender
            alert(`Player 1 is fighting ${characterIndex.earthBender.name}`)
            console.log(`Player 2 chose ${characterIndex.airBender.name}`)
            const player2Name = document.querySelector('.player2Name')
            player2Name.innerHTML = `${player2.name}`
            const character2Image = document.querySelector('.player2Image')
            character2Image.innerHTML = `<div class="player2Image">
                <img src="img/${characterIndex.earthBender.name}.png" id="player2Image">
            </div>`
            // const attackList = document.querySelector('.attackList')
            // attackList.innerHTML = '<a href="#" class="loadFight" onclick = "playGame.startFight()">Start Fight!</a>'
        }else if(characterIndex.fireBender.name == 'Zuko'){
            player2 = characterIndex.fireBender
            alert(`Player 1 is fighting ${characterIndex.fireBender.name}`)
            console.log(`Player 2 chose ${characterIndex.fireBender.name}`)
            const player2Name = document.querySelector('.player2Name')
            player2Name.innerHTML = `${player2.name}`
            const character2Image = document.querySelector('.player2Image')
            character2Image.innerHTML = `<div class="player2Image">
                <img src="img/${characterIndex.fireBender.name}.png" id="player2Image">
            </div>`
            // const attackList = document.querySelector('.attackList')
            // attackList.innerHTML = '<a href="#" class="loadFight" onclick = "playGame.startFight()">Start Fight!</a>'
        }else if(characterIndex.waterBender.name == 'Katara'){
            player2 = characterIndex.waterBender
            alert(`Player 1 is fighting ${characterIndex.waterBender.name}`)
            console.log(`Player 1 chose ${characterIndex.waterBender.name}`)
            const player2Name = document.querySelector('.player2Name')
            player2Name.innerHTML = `${player2.name}`
            const character2Image = document.querySelector('.player2Image')
            character2Image.innerHTML = `<div class="player2Image">
                <img src="img/${characterIndex.waterBender.name}.png" id="player2Image">
            </div>`
            // const attackList = document.querySelector('.attackList')
            // attackList.innerHTML = '<a href="#" class="loadFight" onclick = "playGame.startFight()">Start Fight!</a>'
        }else{
            alert('error, character not selected')
            console.log('error, character not selected')
        }
        
        // const player2Name = document.querySelector('.player2Name')
        // player2Name.innerHTML = `${player2.name}`
        
    },

    attacks() {
        const lightAttack = document.querySelectorAll('.lightAttack')
        lightAttack.addEventListener('click', attackLightAir())
    }

}




let player1
let player2
// let header
// let attackList
// let level


// typical character setup
class Player {
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
    airBender: new Player('Aang', ['Kick', 'Wind Slash', 'Tornado'], 'air'),
    earthBender: new Player('Toph', ['Punch', 'Stomp', 'Earthquake'], 'earth'),
    fireBender: new Player('Zuko', ['Slash', 'Fireball', 'Lightning'], 'fire'),
    waterBender: new Player('Katara', ['Slap', 'Water Whip', 'Tsunami'], 'water')
}


const getRandomCharacter = (characterIndex) => {
    const keys = Object.keys(characterIndex)
    return keys[Math.floor(Math.random() * keys.length)]
}

const getRandomAttack = (characterIndex) => {
    const keys = Object.keys(characterIndex)
    return keys[Math.floor(Math.random() * keys.length)]
}
// console.log(getRandomCharacter(characterIndex))

// console.log(airBender)
// console.log(earthBender)
// console.log(fireBender)
// console.log(waterBender)

// console.log(playGame.startGame(earthBender.name))

// canvas.onlick = function() {
//     health -= 10
//     healthBar.updateHealth(health)
//     console.log('click is working')
// }


// setup attacks
const attackLightAir = () => {
    characterIndex.airBender.attacks[0]
    alert(`${characterIndex.airBender.name} used ${characterIndex.airBender.attacks[0]} to do -15 damage`)
    console.log(characterIndex.airBender.attacks[0])
}

// console.log(attackLightAir())