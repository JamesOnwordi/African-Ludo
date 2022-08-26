// object containing information of each player
blue = {
    inside: 4,
    outside: 0,
    finished: 0,
    position: [null, null, null, null],
    name: "blue",
    home: document.getElementById("zone1"),
    zone: "zone1"
}
red = {
    inside: 4,
    outside: 0,
    finished: 0,
    position: [null, null, null, null],
    name: "red",
    home: document.getElementById("zone2"),
    zone: "zone2"
}
yellow = {
    inside: 4,
    outside: 0,
    finished: 0,
    position: [null, null, null, null],
    name: "yellow",
    home: document.getElementById("zone3"),
    zone: "zone3"
}
green = {
    inside: 4,
    outside: 0,
    finished: 0,
    position: [null, null, null, null],
    name: "green",
    home: document.getElementById("zone4"),
    zone: "zone4"
}

// returns the starting position of each player when called
function getPosition() {
    switch (player.name) {
        case ("blue"):
            return 1
        case ("red"):
            return 14
        case ("green"):
            return 27
        case ("yellow"):
            return 40
        default:
            console.log("error")
    }
}

// function returns a dice randon dice value
function rollDice() {
    const diceOption = [1, 2, 3, 4, 5, 6]
    let dice = diceOption[Math.floor(Math.random() * 6)]
    return dice
}

// starting player
let player = blue

// changes player 
function changePlayer() {
    if (player == blue)
        player = red
    else if (player == red)
        player = green
    else if (player == green)
        player = yellow
    else
        player = blue
}

// 
function bringOut(index){
    if(player.position[index] == null){
        // updates players information 
        player.inside --
        player.outside ++
        // adds an class to token onBoard to reduces size of token
        document.getElementById(`${player.zone}Token${index}`).classList.add("onBoard")
        // receives starting position of token
        let getHomePosition = getPosition()
        let targetBox = document.getElementById(`box${getHomePosition}`)
        // moves token position
        targetBox.append(document.getElementById(`${player.zone}Token${index}`))
        // updates players information 
        player.position[index]=getHomePosition
    }
}

function moveToken(index,value){
 currentPlayer = player
if(currentPlayer.position[index] != null){
    console.log(`moving Token ${index} by  ${value} `)
    result = getTokensPath(currentPlayer,index,value)
    
    if(result != 100){
    if(currentPlayer.name != "blue"){
        if(result<currentPlayer.position[index]){
            currentPlayer.position[index] = result
            if(currentPlayer.position[index] != "finished"){
            let targetBox = document.getElementById(`box${currentPlayer.position[index]}`)
            console.log(targetBox)
            targetBox.append(document.getElementById(`${currentPlayer.zone}Token${index}`))
        }
    }
    }
    let autoMove = setInterval(function(){
         console.log(currentPlayer,currentPlayer.position[index])
        if( result > currentPlayer.position[index]){
            currentPlayer.position[index]++
            targetBox = document.getElementById(`box${currentPlayer.position[index]}`)
            console.log(targetBox)
            targetBox.append(document.getElementById(`${currentPlayer.zone}Token${index}`))
        }else clearInterval(autoMove);
    },100)}
    else {
    document.getElementById(`${player.zone}Token${index}`).remove()
    currentPlayer.finished++
    if(currentPlayer.finished ==4){
        winner = true
        setTimeout(()=>{document.getElementById("display").innerHTML=` ${currentPlayer.name} Wins! All 4 ${currentPlayer.name}tokens has crossed the finish line`,1200})    
    }
}
    }
}

// An algorithm to go round the board
// still a shaky one 
function compare(savedPlayer,index,value,v1,v2,v3,v4){
    if(savedPlayer.position[index]+value >v1 ){
        setTimeout(()=>{document.getElementById("display").innerHTML=` A ${savedPlayer.name} token has crossed the finish line`,10})
        return savedPlayer.position[index] =100
    }
    else if((savedPlayer.position[index] +value) >v2){
        // change path to start from 0
        return (savedPlayer.position[index] +value) - v2+1
    }
    if(savedPlayer.position[index]+value >v3 && savedPlayer.position[index]<(v3+1)){
        // change path to start from 57
        return ((savedPlayer.position[index] +value) - v3)+v4
    }
    else return savedPlayer.position[index]+value
}

// An algorithm to go round the board
// I used numbers to save each boxes' path 
// so this helps track where players are meant to be 
// not the best logic but would edit soon
function getTokensPath(savedPlayer,index,value){
    switch (player.name) {
        case ("blue"):
            if((savedPlayer.position[index] +value) >56){
                if(savedPlayer.finished ==4){
                    setTimeout(()=>{document.getElementById("display").innerHTML=` ${savedPlayer.name} Wins! All 4 ${savedPlayer.name}tokens has crossed the finish line`,200})
                }
                setTimeout(()=>{document.getElementById("display").innerHTML=` A ${savedPlayer.name} token has crossed the finish line`,10})
                return savedPlayer.position[index] =100
            }
            else return savedPlayer.position[index]+value
        case ("red"):
            return compare(savedPlayer,index,value,61,51,12,56)
        case ("green"):
            return compare(savedPlayer,index,value,66,51,25,61)
        case ("yellow"):
            return compare(savedPlayer,index,value,71,51,38,66)
        default:
            console.log("error")
    }
}

// To avoid other tokens from making moves for who plays 
function colorCheck(e){
    return e.target.classList[0] ==`${player.name}Token`
    } 

// dice function
// gameOn, startButton, winner are what I used to stop Listeners from going crazy
let diceButton 
let dice
let diceUsed
let gameOn =false
let startButton = true
let winner = false
function playersRoll(){
    diceButton = document.getElementById("roll")
    resetButton = document.getElementById("reset")
    document.getElementById("start").addEventListener("click",function(){
        if(startButton == true && winner==false){
            console.log("here")
            startButton =false
            setTimeout(()=>{document.getElementById("display").innerHTML=`Let the Game Begin,`},100)
            setTimeout(()=>{document.getElementById("display").innerHTML="Blue's Starts ... Roll Dice"},1200)
            // Roll eventListener
            diceButton.addEventListener("click",function(){
            if(gameOn == false){
                gameOn =true
                dice= rollDice()
                dice2= rollDice()
                diceUsed = false
                dice2Used = false
                console.log(dice,dice2)
                setTimeout(()=>{document.getElementById("display").innerHTML=` ${player.name} has rolled a ${dice} `},400)
                tokenMoves()
            }})
            // Reset Event Listener
            resetButton.addEventListener("click",function(){
                 gameOn =false
                 startButton = true
                 winner = false
                 dice =0
                 for(let i =0;i<4;i++){
                    let targetBox = document.getElementById(`${player.zone}`)
                    for(let j =1; j<5; j++){
                        targetBox.append(document.getElementById(`${player.zone}Token${i}`))
                    }
                    changePlayer()
                 }

            })
         }
    })
}

function tokenMoves(){
    if(dice == 6){
        // adds eventListener to token 
            for(let i=1;i<5;i++){
                 document.getElementById(`${player.zone}Token${i}`).addEventListener("click",function(e){
                    if (diceUsed == false && player.position[i] == null && colorCheck(e) && winner ==false) {
                        setTimeout(()=>{document.getElementById("display").innerHTML=`${player.name}'s Turn ... Roll1 Dice`},200)
                        gameOn =false
                        bringOut(i)
                        diceUsed = true
                        changePlayer()
                        start()
                    }
                 })
                 document.getElementById(`${player.zone}Token${i}`).addEventListener("click",function(e){
                    if (diceUsed == false && player.position[i] != null && colorCheck(e) && winner ==false) {
                        moveToken(i,dice)
                        if(winner ==false){
                        setTimeout(()=>{document.getElementById("display").innerHTML=`${player.name}'s Turn ... Roll2 Dice`},200)
                        gameOn =false
                        diceUsed = true
                        setTimeout(()=>{dice2Used =false},200) 
                        changePlayer()
                        start()}
                    }
                 })
            }
            }else{
            if(player.inside != 4){
            diceUsed =false
            for(let i =1;i<5;i++){
                document.getElementById(`${player.zone}Token${i}`).addEventListener("click",function(e){
                if (diceUsed == false && player.position[i] != null && colorCheck(e) && winner==false) {
                    
                    moveToken(i,dice)
                    if(winner ==false){
                    setTimeout(()=>{document.getElementById("display").innerHTML=`${player.name} Turn ... Roll3 Dice`},200)
                    diceUsed = true
                    setTimeout(()=>{dice2Used =false},200) 
                    changePlayer()
                    start()}
                }
             })
            }}
             else{
                if(winner ==false){
                    let previousPlayer =player.name
                    setTimeout(()=>{
                    start()
                    changePlayer()
                    document.getElementById("display").innerHTML=`${previousPlayer}'s turn was Skipped ... it's ${player.name}'s Turn`
                    gameOn =false
                },2200)
            }
        }
        }
}
function start(){
    playersRoll()
}
document.addEventListener("DOMContentLoaded",function(){
   start()
})