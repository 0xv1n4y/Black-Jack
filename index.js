
let sum=0
let cards=[]
let message=""
let isAlive=false
let hasblackjack=false

let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEL=document.getElementById("cards-el")

console.log(cards)

// store userdetails in object

let player = {
    name: "Vinay",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// generating random Number

function getRandomCard(){
    let randomNumber=Math.floor( Math.random() * 13) + 1
    
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber

    }
}

// If you click the startGame button the below function will execute

function startGame(){
    isAlive=true

    let firstcard=getRandomCard()
    let secondcard=getRandomCard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard

    renderGame()
}

function renderGame(){
    cardsEL.textContent = "Cards: "
    for (let i=0; i< cards.length; i++){

        cardsEL.textContent+= cards[i] + "  "

    }
    

    sumEl.textContent="Sum :"+sum
   // message Condition
   if(sum <= 20){
    message="Do you want to draw a new card"
    

   }else if(sum === 21){
    message="You Won the Black jack"
    hasblackjack = true

   }else{
    message="you are out of the game"
    isAlive=false

   }
   messageEl.textContent=message
}

// It will generate new Card 

function newCard(){
    if(isAlive === true && hasblackjack === false){
        let card=getRandomCard()
    sum += card
    cards.push(card)
    
    renderGame()
    }
    
}