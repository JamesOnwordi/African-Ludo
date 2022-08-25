
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

function rollDice() {
    const diceOption = [1, 2, 3, 4, 5, 6]
    let dice = diceOption[Math.floor(Math.random() * 6)]
    return dice
}

// starting player
let player = blue

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

function bringOut(index){
    if(player.position[index] == null){
        player.inside --
        console.log(`bringing Token ${index} out in position ${player.position[index]}`)
        document.getElementById(`${player.zone}Token${index}`).classList.add("onBoard")
        let getHomePosition = getPosition()
        console.log(`placing token ${index} in position ${getHomePosition}`)
        let targetBox = document.getElementById(`box${getHomePosition}`)
        targetBox.append(document.getElementById(`${player.zone}Token${index}`))
        player.position[index]=getHomePosition
    }
}

function moveToken(index,value){
 savedPlayer = player
if(savedPlayer.position[index] != null){
    console.log(`moving Token ${index} by  ${value} `)
    result = getTokensPath(savedPlayer,index,value)
    
    if(result != 100){
    if(savedPlayer.name != "blue"){
        if(result<savedPlayer.position[index]){
            savedPlayer.position[index] = result
    if(savedPlayer.position[index] != "finished"){
                let targetBox = document.getElementById(`box${savedPlayer.position[index]}`)
                console.log(targetBox)
                targetBox.append(document.getElementById(`${savedPlayer.zone}Token${index}`))}
    }
    }

        let autoMove = setInterval(function(){
            console.log(savedPlayer,savedPlayer.position[index])
        if( result > savedPlayer.position[index]){
            savedPlayer.position[index]++
            targetBox = document.getElementById(`box${savedPlayer.position[index]}`)
            console.log(targetBox)
            targetBox.append(document.getElementById(`${savedPlayer.zone}Token${index}`))
        }else clearInterval(autoMove);
    },100)}
    else {
    // A win Case
    
    document.getElementById(`${player.zone}Token${index}`).remove()
    savedPlayer.finished++
    if(savedPlayer.finished ==4){
        console.log("won")
        winner = true
        setTimeout(()=>{document.getElementById("display").innerHTML=` ${savedPlayer.name} Wins! All 4 ${savedPlayer.name}tokens has crossed the finish line`,1200})
        
    }
}
    }
}

// function canEat(index,target){
//     if
// }

function compare(savedPlayer,index,value,v1,v2,v3,v4){
    if(savedPlayer.position[index]+value >v1 ){
        setTimeout(()=>{document.getElementById("display").innerHTML=` A ${savedPlayer.name} token has crossed the finish line`,200})
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

function getTokensPath(savedPlayer,index,value){
    switch (player.name) {
        case ("blue"):
            if((savedPlayer.position[index] +value) >56){
                if(savedPlayer.finished ==4){
                    setTimeout(()=>{document.getElementById("display").innerHTML=` ${savedPlayer.name} Wins! All 4 ${savedPlayer.name}tokens has crossed the finish line`,200})
                }
                setTimeout(()=>{document.getElementById("display").innerHTML=` A ${savedPlayer.name} token has crossed the finish line`,200})
                return savedPlayer.position[index] =100
            }
            else return savedPlayer.position[index]+value
            // for going round the div
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

function colorCheck(e){
    return e.target.classList[0] ==`${player.name}Token`
    } 

let diceButton 
let dice1
let dice2
let dice1Used
let dice2Used
let gameOn =false
let startButton = true
let winner = false
function playersRoll(){
    diceButton = document.getElementById("roll")
    document.getElementById("start").addEventListener("click",function(){
        if(startButton == true && winner==false){
        console.log("here")
        startButton =false
        setTimeout(()=>{document.getElementById("display").innerHTML=`Let the Game Begin,`},100)
        setTimeout(()=>{document.getElementById("display").innerHTML="Blue's Starts ... Roll Dice"},1200)
        diceButton.addEventListener("click",function(){
        if(gameOn == false){
            gameOn =true
            dice1= rollDice()
            dice2= rollDice()
            dice1Used = false
            dice2Used = false
            console.log(dice1,dice2)
            setTimeout(()=>{document.getElementById("display").innerHTML=` ${player.name} has rolled a ${dice1} `},400)
            tokenMoves()
        }
    })}})
}

function tokenMoves(){
        if(dice1 == 6){
            for(let i=1;i<5;i++){
                 document.getElementById(`${player.zone}Token${i}`).addEventListener("click",function(e){
                    if (dice1Used == false && player.position[i] == null && colorCheck(e) && winner ==false) {
                        console.log(e.target.classList[0] ==`${player.name}Token`)
                        setTimeout(()=>{document.getElementById("display").innerHTML=`${player.name}'s Turn ... Roll1 Dice`},200)
                        console.log("here")
                        gameOn =false
                        bringOut(i)
                        dice1Used = true
                        changePlayer()
                        start()
                    }
                 })
                 document.getElementById(`${player.zone}Token${i}`).addEventListener("click",function(e){
                    if (dice1Used == false && player.position[i] != null && colorCheck(e) && winner ==false) {
                        console.log(e.target.zone)
                       
                        
                        console.log("here")
                        moveToken(i,dice1)
                        if(winner ==false){
                        setTimeout(()=>{document.getElementById("display").innerHTML=`${player.name}'s Turn ... Roll2 Dice`},200)
                        console.log("here")
                        gameOn =false
                        dice1Used = true
                        setTimeout(()=>{dice2Used =false},200) 
                        changePlayer()
                        start()}
                    }
                 })
            }
            }else{
            if(player.inside != 4){
            dice1Used =false
            for(let i =1;i<5;i++){
                document.getElementById(`${player.zone}Token${i}`).addEventListener("click",function(e){
                if (dice1Used == false && player.position[i] != null && colorCheck(e) && winner==false) {
                    
                    moveToken(i,dice1)
                    console.log("here")
                    // gameOn =false
                    if(winner ==false){
                    setTimeout(()=>{document.getElementById("display").innerHTML=`${player.name} Turn ... Roll3 Dice`},200)
                    dice1Used = true
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
                console.log("send forth")
                document.getElementById("display").innerHTML=`${previousPlayer}'s turn was Skipped ... it's ${player.name}'s Turn`
                gameOn =false
                
                },2200)
                }
                
   

            }
        }
}
function noMove(){
    changePlayer()
    start()
    startButton = true
    gameOn =false

}
function start(){
    playersRoll()
}
document.addEventListener("DOMContentLoaded",function(){
   start()
})






// for(let i =1;i<5;i++){
//         document.getElementById(`${player.zone}Token${i}`).addEventListener("click",function(){
//             bringOut(i)
//          })
//     }
//     for(let i =1;i<5;i++){
//         document.getElementById(`${player.zone}Token${i}`).addEventListener("click",function(){
//             moveToken(i,3)
//          })
//     }