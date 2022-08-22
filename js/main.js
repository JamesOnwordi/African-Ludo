document.addEventListener("DOMContentLoaded",function()
{
// initialization of important elements

let dice1 
let dice2
// initialization of players object
let blue,yellow,green,red
blue ={
    inside:4,
    outside:0,
    finished:0,
    position:[null,null,null,null],
    track:null,
    name:"blue",
    home: document.getElementById("zone1")
}
red ={
    inside:4,
    outside:0,
    finished:0,
    position:[null,null,null,null],
    name:"red",
    track:null,
    home: document.getElementById("zone2")
}
yellow ={
    inside:4,
    outside:0,
    finished:0,
    position:[0,0,0,0],
    name:"yellow",
    track:null,
    home: document.getElementById("zone3")
}
green ={
    inside:4,
    outside:0,
    finished:0,
    position:[null,null,null,null],
    name:"green",
    track:null,
    home: document.getElementById("zone4")
}

// keep track of whose turn it is
// Assigns blue to start first
let playerTurn =yellow

function changePlayer(){
    console.log(playerTurn)
    if(playerTurn == blue)
    playerTurn =red
    else if(playerTurn == red)
    playerTurn = green
    else if(playerTurn == green)
    playerTurn = yellow
    else
    playerTurn = blue
}
console.log(blue,red,green,yellow)


function rollDice(){
    const dice =[1,2,3,4,5,6]

    let dice1 =dice[Math.floor(Math.random()*6)]
    console.log(dice1)
    return 6
}

function newPlayer(){
    switch(playerTurn.name){
        case ("blue"):
            playerTurn.position[playerTurn.track] =1
            console.log("add a token")
            document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.add(`${playerTurn.name}Token`)
        break
        case ("red"):
            playerTurn.position[playerTurn.track] =14
            console.log("add a token")
            document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.add(`${playerTurn.name}Token`)
        break
        case ("green"):
            playerTurn.position[playerTurn.track] =27
            console.log("add a token")
            document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.add(`${playerTurn.name}Token`)
        break
        case ("yellow"):
            playerTurn.position[playerTurn.track] =40
            console.log("add a token")
            console.log( playerTurn.position[playerTurn.track])
            document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.add(`${playerTurn.name}Token`)
        break
        default:
        console.log("error")
    }
}

function makeNewPlayer(){
    newPlayer(playerTurn.track-1)
    console.log("new player made")
    document.getElementById(`box${playerTurn.position[playerTurn.track-1]}`).classList.add(`${playerTurn.name}Token`)
    playerTurn.home.removeEventListener("click",makeNewPlayer)
    document.getElementById(`box${playerTurn.position[playerTurn.track]}`).removeEventListener("click",movePlayer)
}
// work on this
function movePlayer(){
    document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.remove(`${playerTurn.name}Token`)
    document.getElementById(`box${playerTurn.position[playerTurn.track]}`).removeEventListener("click",movePlayer)
    console.log(" player moved")
    temp = playerTurn.position[playerTurn.track]
    playerTurn.position[playerTurn.track] += dice2
    // add time interval
    console.log(playerTurn.track)
    console.log( playerTurn.position[playerTurn.track])
    document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.add(`${playerTurn.name}Token`)
 //   document.getElementById(`box${temp}`).removeEventListener("click",movePlayer)
    playerTurn.home.removeEventListener("click",makeNewPlayer)
}
function makeAMove(){
     dice1 =rollDice()
     dice2 =rollDice()

    // if(playerTurn.finished == 4)
    // {
    //     // move to nextPlayer

    // }
        if(dice1 == 6||dice2 == 6){
            console.log("i'm in " ,playerTurn, " home")
            
            // keeps playerTurn.track of how many is left inside and not in the game board
             playerTurn.track = playerTurn.inside-1
            // allows those inside come out
            // gives power to the div box to bring a player out
            if(playerTurn.track == 3 )
            {
                // assigns a position to the token
                console.log("here")
                newPlayer()
                console.log("here")

                if(dice1 ==6 ){
                    if(dice2 == 6){
                        // an option is given to the user
                        playerTurn.home.addEventListener("click",makeNewPlayer)
                        document.getElementById(`box${playerTurn.position[playerTurn.track]}`).addEventListener("click",movePlayer)

                        console.log("here")

                       // makeAMove()
                    }
                    else{
                    // any number
                    console.log("here1")
                    document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.remove(`${playerTurn.name}Token`)
                    playerTurn.position[playerTurn.track] += dice2
                    // add time interval
                    document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.add(`${playerTurn.name}Token`)}
                }else if(dice2 ==6){
                    console.log("here2")
                    document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.remove(`${playerTurn.name}Token`)
                    playerTurn.position[playerTurn.track] += dice1
                    // add time interval
                    document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.add(`${playerTurn.name}Token`)
                }

            }
            // allows those inside come out
            // gives power to the div box to bring a player out
            // gives those outside permission to make moves
            else if(playerTurn.track < 4 && playerTurn.track > 0 ){

            }
             // gives those outside power to make moves
            else{

            }
        }}
        
            // gives player the ability to go out of house
                    // brings a player out of home

            // assigns position for whose turn it is
            // switch(playerTurn.name){
            //     case ("blue"):
            //         playerTurn.position[track] =1
            //         console.log("hereee")
            //     break
            //     case ("red"):
            //         playerTurn.position[track] =14
            //         console.log("hereee")
            //     break
            //     case ("green"):
            //         playerTurn.position[track] =27
            //     break
            //     case ("yellow"):
            //         playerTurn.position[track] =40
            //     break
            //     default:
            //     console.log("error")
            // }
                    // let firstPosition =document.getElementById(`box${playerTurn.position[track]}`).classList.add('colorDiv')
                    // document.addEventListener('click',function(){
                    //     console.log("here")
                    //     console.log(blueHome.addEventListener('click',function(){
                    //     return true
                    //     }))
//                     // })
//                 if(dice1 ==6){
//                     if(dice2 ==6)
//                     {
//                         let newPlayer =false
//                         let moveOldPlayer =false
//                         // gives the player the ability to choose again from home
//                         playerTurn.home.addEventListener("click",function(){
//                             console.log("bring a new player out")
//                             playerTurn.position[track-1]=0
//                             document.getElementById(`box${playerTurn.position[track-1]}`).classList.add('colorDiv')
//                         })
//                         document.getElementById(`box${playerTurn.position[track]}`).addEventListener("click",function(){
//                             console.log("move player")
//                             playerTurn.position[track] += dice2
//                             document.getElementById(`box${playerTurn.position[track]}`).classList.add('colorDiv')
//                         })
//                         playerTurn.outside += 1
//                         playerTurn.inside -= 1
//                         //Open when done
//                        // makeAmove()
                        

//                     // brings a player out of home
//                     // playerTurn.position[1]=0

//                     // document.getElementById(`box${playerTurn.position[1]}`).classList.add('colorDiv')
//                     //     })
                    
//                     }else{
//                         playerTurn.position[track] += dice2
//                         // add time interval
//                         document.getElementById(`box${playerTurn.position[0]}`).classList.add('colorDiv')
//                     }
//                 }
//                 else if(dice2 ==6){
//                     playerTurn.position[track] += dice1
//                     // add time interval
//                     document.getElementById(`box${playerTurn.position[track]}`).classList.add('colorDiv')
//                 }
            
//         }else{
//             if(playerTurn.outside == 0){
//                 // no mokes to make
//             }
//             else{
//                 // initalize each div to be able to move based on the number
//             }

//         } 
// function stopMove(){

// }
// }



// // console.log(blueHome)
//     // for(let i =0;i<72;i++){
//     //     console.log("hi")
//     //     console.log(document.getElementById("zone1"))
//     //     document.getElementById(`box${i}`).classList.add('colorDiv')
//     //     if(i >51){
//     //         console.log("turn left")
//     //     }
        
//     // }
//     //rollDice()
     makeAMove()
    // changePlayer()
    // makeAmove()
    // changePlayer()
    // makeAmove()
    // changePlayer()
    // makeAmove()
    // changePlayer()
    // change the player
// console.log(playerTurn)
// changePlayer()
// console.log(playerTurn)
// changePlayer()
// console.log(playerTurn)
// changePlayer()
// console.log(playerTurn)
// changePlayer()
// console.log(playerTurn)
// changePlayer()
// console.log(playerTurn)
// changePlayer()
// console.log(playerTurn)
// changePlayer()
// console.log(playerTurn)
// changePlayer()
// console.log(playerTurn)

// changePlayer()
// console.log(playerTurn)
    })

