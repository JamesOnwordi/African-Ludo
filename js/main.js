// let num = player
// let value
// document.addEventListener("DOMContentLoaded", function () {
//     // initialization of important elements
//     const info = document.querySelector("#information")
//     const text = document.createAttribute("h1")

//     let dice1
//     let dice2

//     let usedDice1 = false
//     let usedDice2 = false

//     // initialization of players object
//     let blue, yellow, green, red
//     blue = {
//         inside: 4,
//         outside: 0,
//         finished: 0,
//         position: [null, null, null, null],
//         listener: [true, true, true, true],
//         move: [false, true, true, true],
//         track: null,
//         name: "blue",
//         home: document.getElementById("zone1"),
//         zone: "zone1"
//     }
//     red = {
//         inside: 4,
//         outside: 0,
//         finished: 0,
//         position: [null, null, null, null],
//         listener: [true, true, true, true],
//         move: [false, true, true, true],
//         name: "red",
//         track: null,
//         home: document.getElementById("zone2"),
//         zone: "zone2"
//     }
//     yellow = {
//         inside: 4,
//         outside: 0,
//         finished: 0,
//         position: [0, 0, 0, 0],
//         listener: [true, true, true, true],
//         move: [false, true, true, true],
//         currentToken: null,
//         name: "yellow",
//         track: null,
//         home: document.getElementById("zone3"),
//         zone: "zone3"
//     }
//     green = {
//         inside: 4,
//         outside: 0,
//         finished: 0,
//         position: [null, null, null, null],
//         listener: [true, true, true, true],
//         move: [false, false, false, false],
//         name: "green",
//         track: null,
//         home: document.getElementById("zone4"),
//         zone: "zone4"
//     }

//     // keep track of whose turn it is
//     // Assigns blue to start first
//     let playerTurn = yellow

//     function changePlayer() {
//         console.log(playerTurn)
//         if (playerTurn == blue)
//             playerTurn = red
//         else if (playerTurn == red)
//             playerTurn = green
//         else if (playerTurn == green)
//             playerTurn = yellow
//         else
//             playerTurn = blue
//     }
//     console.log(blue, red, green, yellow)


//     function rollDice() {
//         const dice = [1, 2, 3, 4, 5, 6]

//         let dice1 = dice[Math.floor(Math.random() * 6)]
//         console.log(dice1)
//         return 6
//     }

//     function getPosition() {
//         switch (playerTurn.name) {
//             case ("blue"):
//                 return 1
//                 // document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.add(`${playerTurn.name}Token`)
//                 break
//             case ("red"):
//                 return 14

//                 // document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.add(`${playerTurn.name}Token`)
//                 break
//             case ("green"):
//                 return 27
//                 // document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.add(`${playerTurn.name}Token`)
//                 break
//             case ("yellow"):
//                 return 40
//                 // document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.add(`${playerTurn.name}Token`)
//                 break
//             default:
//                 console.log("error")
//         }
//     }
    
    
//     // function makeNewPlayer() {
//     //     let track = playerTurn.position[playerTurn.inside - 1]
//     //     newPlayer()
//     //     console.log("new player made")
//     //     // document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.add(`${playerTurn.name}Token`)
//     //     playerTurn.home.removeEventListener("click", makeNewPlayer)
//     //     document.getElementById(`box${track}`).removeEventListener("click", movePlayer)
//     //     playerTurn.inside--
//     //     playerTurn.outside++
//     // }
//     // // work on this
//     // function movePlayer() {
//     //     // remove token from previous location
//     //     // document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.remove(`${playerTurn.name}Token`)
//     //     // document.getElementById(`box${playerTurn.position[playerTurn.track]}`).removeEventListener("click",movePlayer)
//     //     console.log("player moved")
//     //     temp = playerTurn.position[playerTurn.track]
//     //     playerTurn.position[playerTurn.track] += dice2
//     //     // add time interval
//     //     console.log(playerTurn.track)
//     //     console.log(playerTurn.position[playerTurn.track])
//     //     // document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.add(`${playerTurn.name}Token`)
//     //     //   document.getElementById(`box${temp}`).removeEventListener("click",movePlayer)
//     //     // playerTurn.home.removeEventListener("click",makeNewPlayer)
//     // }
//     // function move1around() {
//     //     console.log("move")
//     //     if (playerTurn.move[0] == true) {
//     //         console.log("player moved")
//     //         temp = playerTurn.position[0]
//     //         playerTurn.position[0] += dice2
//     //         document.getElementById(`box${playerTurn.position[0]}`).append(document.getElementById(`${playerTurn.zone}Token1`))
//     //         playerTurn.move[0] = false
//     //     }
//     // }
//     // function move1arounda() {
//     //     console.log("move")
//     //     if (playerTurn.move[0] == true) {
//     //         console.log("player moved")
//     //         temp = playerTurn.position[0]
//     //         playerTurn.position[0] += dice1
//     //         document.getElementById(`box${playerTurn.position[0]}`).append(document.getElementById(`${playerTurn.zone}Token1`))
//     //         playerTurn.move[0] = false
//     //     }
//     // }
//     // function move2around() {
//     //     if (playerTurn.move[1] == true) {
//     //         console.log("player moved")
//     //         temp = playerTurn.position[1]
//     //         playerTurn.position[1] += dice2
//     //         document.getElementById(`box${playerTurn.position[1]}`).append(document.getElementById(`${playerTurn.zone}Token2`))
//     //         playerTurn.move[1] = false
//     //     }
//     // }
//     // function move2arounda() {
//     //     if (playerTurn.move[1] == true) {
//     //         console.log("player moved")
//     //         temp = playerTurn.position[1]
//     //         playerTurn.position[1] += dice1
//     //         document.getElementById(`box${playerTurn.position[1]}`).append(document.getElementById(`${playerTurn.zone}Token2`))
//     //         playerTurn.move[1] = false
//     //     }
//     // }
//     // function move3around() {
//     //     if (playerTurn.move[2] == true) {
//     //         console.log("player moved")
//     //         temp = playerTurn.position[2]
//     //         playerTurn.position[2] += dice2
//     //         document.getElementById(`box${playerTurn.position[2]}`).append(document.getElementById(`${playerTurn.zone}Token3`))
//     //         playerTurn.move[2] = false
//     //     }
//     // }
//     // function move3arounda() {
//     //     if (playerTurn.move[2] == true) {
//     //         console.log("player moved")
//     //         temp = playerTurn.position[2]
//     //         playerTurn.position[2] += dice1
//     //         document.getElementById(`box${playerTurn.position[2]}`).append(document.getElementById(`${playerTurn.zone}Token3`))
//     //         playerTurn.move[2] = false
//     //     }
//     // }
//     // function move4around() {
//     //     if (playerTurn.move[3] == true) {
//     //         console.log("player moved")
//     //         temp = playerTurn.position[3]
//     //         playerTurn.position[3] += dice2
//     //         document.getElementById(`box${playerTurn.position[3]}`).append(document.getElementById(`${playerTurn.zone}Token4`))
//     //         playerTurn.move[3] = false
//     //     }
//     // }
//     // function move4arounda() {
//     //     if (playerTurn.move[3] == true) {
//     //         console.log("player moved")
//     //         temp = playerTurn.position[3]
//     //         playerTurn.position[3] += dice1
//     //         document.getElementById(`box${playerTurn.position[3]}`).append(document.getElementById(`${playerTurn.zone}Token4`))
//     //         playerTurn.move[3] = false
//     //     }
//     // }

//     // // -----------------------------------------------------------------------
//     // // this allows players come out and also put's the eventListener on hold
//     // // using booleans
//     // let vessel
//     // function token1Outside() {
//     //     if (playerTurn.listener[0] == true) {
//     //         console.log("bring number 1 out")
//     //         // reduces the width and height of the token
//     //         console.log(playerTurn.zone)
//     //         document.getElementById(`${playerTurn.zone}Token1`).classList.add("onBoard")
//     //         let vessel = getPosition()
//     //         console.log(vessel)
//     //         document.getElementById(`box${vessel}`).append(document.getElementById(`${playerTurn.zone}Token1`))
//     //         playerTurn.position[0] = vessel
//     //     }
//     // }
//     // function token2Outside() {
//     //     if (playerTurn.listener[1] == true) {
//     //         console.log("bring number 2 out")
//     //         document.getElementById(`${playerTurn.zone}Token2`).classList.add("onBoard")
//     //         let vessel = getPosition()
//     //         document.getElementById(`box${vessel}`).append(document.getElementById(`${playerTurn.zone}Token2`))
//     //         playerTurn.position[1] = vessel
//     //         console.log(vessel)
//     //     }
//     // }
//     // function token3Outside() {
//     //     if (playerTurn.listener[2] == true) {
//     //         console.log("bring number 3 out")
//     //         document.getElementById(`${playerTurn.zone}Token3`).classList.add("onBoard")
//     //         let vessel = getPosition()
//     //         document.getElementById(`box${vessel}`).append(document.getElementById(`${playerTurn.zone}Token3`))
//     //         playerTurn.position[2] = vessel
//     //     }
//     // }
//     // function token4Outside() {
//     //     if (playerTurn.listener[3] == true) {
//     //         console.log("bring number 4 out")
//     //         console.log(document.getElementById(`${playerTurn.zone}Token4`).innerText)
//     //         document.getElementById(`${playerTurn.zone}Token4`).classList.add("onBoard")
//     //         let vessel = getPosition()
//     //         document.getElementById(`box${vessel}`).append(document.getElementById(`${playerTurn.zone}Token4`))
//     //         playerTurn.position[3] = vessel
//     //     }
//     // }

//     // function step2() {
//     //     console.log("here")
//     //     if (dice2 == 6 && dice1 == 6) {
//     //         document.getElementById(`${playerTurn.zone}Token1`).addEventListener("click", function () {
//     //             if (playerTurn.listener[0] == true) {
//     //                 if (playerTurn.position != 0)
//     //                     token1Outside()
//     //                 console.log("event 2", playerTurn.listener[0], playerTurn.move[0])
//     //                 playerTurn.listener = [false, false, false, false]
//     //                 playerTurn.move = [false, false, false, false]
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token2`).addEventListener("click", function () {
//     //             if (playerTurn.listener[1] == true) {
//     //                 if (playerTurn.position != 0)
//     //                     token2Outside
//     //                 console.log("event 2", playerTurn.listener[1], playerTurn.move[1])
//     //                 playerTurn.listener = [false, false, false, false]
//     //                 playerTurn.move = [false, false, false, false]
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token3`).addEventListener("click", function () {
//     //             if (playerTurn.listener[2] == true) {
//     //                 if (playerTurn.position != 0)
//     //                     token3Outside
//     //                 console.log("event 2", playerTurn.listener[2], playerTurn.move[2])
//     //                 playerTurn.listener = [false, false, false, false]
//     //                 playerTurn.move = [false, false, false, false]
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token4`).addEventListener("click", function () {
//     //             if (playerTurn.listener[3] == true) {
//     //                 if (playerTurn.position != 0)
//     //                     token4Outside
//     //                 console.log("event 2", playerTurn.listener[3], playerTurn.move[3])
//     //                 playerTurn.listener = [false, false, false, false]
//     //                 playerTurn.move = [false, false, false, false]
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token1`).addEventListener("click", function () {
//     //             if (playerTurn.move[0] == true) {
//     //                 console.log("event 3", playerTurn.listener[0], playerTurn.move[0])
//     //                 move1around()
//     //                 playerTurn.listener = [false, false, false, false]
//     //                 playerTurn.move = [false, false, false, false]
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token2`).addEventListener("click", function () {
//     //             if (playerTurn.move[1] == true) {
//     //                 console.log("event 3", playerTurn.listener[1], playerTurn.move[1])
//     //                 move2around()
//     //                 playerTurn.listener = [false, false, false, false]
//     //                 playerTurn.move = [false, false, false, false]
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token3`).addEventListener("click", function () {
//     //             if (playerTurn.move[2] == true) {
//     //                 console.log("event 3", playerTurn.listener[2], playerTurn.move[2])
//     //                 move3around()
//     //                 playerTurn.listener = [false, false, false, false]
//     //                 playerTurn.move = [false, false, false, false]
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token4`).addEventListener("click", function () {
//     //             if (playerTurn.move[3] == true) {
//     //                 console.log("event 3", playerTurn.listener[3], playerTurn.move[3])
//     //                 move4around()
//     //                 playerTurn.listener = [false, false, false, false]
//     //                 playerTurn.move = [false, false, false, false]
//     //             }
//     //         })

//     //         // document.getElementById(`${playerTurn.zone}Token1`).addEventListener("click",token1Outside)
//     //         // document.getElementById(`${playerTurn.zone}Token2`).addEventListener("click",token2Outside)
//     //         // document.getElementById(`${playerTurn.zone}Token3`).addEventListener("click",token3Outside)
//     //         // document.getElementById(`${playerTurn.zone}Token4`).addEventListener("click",token4Outside)
//     //         // playerTurn.listener=[false,false,false,false]
//     //     }
//     //     else if (dice1 == 6) {
//     //         document.getElementById(`${playerTurn.zone}Token1`).addEventListener("click", function () {
//     //             if (playerTurn.move[0] == true) {
//     //                 console.log("event 3", playerTurn.listener[0], playerTurn.move[0])
//     //                 move1around()
//     //                 playerTurn.listener = [false, false, false, false]
//     //                 playerTurn.move = [false, false, false, false]
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token2`).addEventListener("click", function () {
//     //             if (playerTurn.move[1] == true) {
//     //                 console.log("event 3", playerTurn.listener[1], playerTurn.move[1])
//     //                 move2around()
//     //                 playerTurn.listener = [false, false, false, false]
//     //                 playerTurn.move = [false, false, false, false]
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token3`).addEventListener("click", function () {
//     //             if (playerTurn.move[2] == true) {
//     //                 console.log("event 3", playerTurn.listener[2], playerTurn.move[2])
//     //                 move3around()
//     //                 playerTurn.listener = [false, false, false, false]
//     //                 playerTurn.move = [false, false, false, false]
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token4`).addEventListener("click", function () {
//     //             if (playerTurn.move[3] == true) {
//     //                 console.log("event 3", playerTurn.listener[3], playerTurn.move[3])
//     //                 move4around()
//     //                 playerTurn.listener = [false, false, false, false]
//     //                 playerTurn.move = [false, false, false, false]
//     //             }
//     //         })
//     //     }
//     //     else if (dice2 == 6) {
//     //         document.getElementById(`${playerTurn.zone}Token1`).addEventListener("click", function () {
//     //             if (playerTurn.move[0] == true) {
//     //                 console.log("event 3", playerTurn.listener[0], playerTurn.move[0])
//     //                 move1arounda()
//     //                 playerTurn.listener = [false, false, false, false]
//     //                 playerTurn.move = [false, false, false, false]
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token2`).addEventListener("click", function () {
//     //             if (playerTurn.move[1] == true) {
//     //                 console.log("event 3", playerTurn.listener[1], playerTurn.move[1])
//     //                 move2arounda()
//     //                 playerTurn.listener = [false, false, false, false]
//     //                 playerTurn.move = [false, false, false, false]
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token3`).addEventListener("click", function () {
//     //             if (playerTurn.move[2] == true) {
//     //                 console.log("event 3", playerTurn.listener[2], playerTurn.move[2])
//     //                 move3arounda()
//     //                 playerTurn.listener = [false, false, false, false]
//     //                 playerTurn.move = [false, false, false, false]
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token4`).addEventListener("click", function () {
//     //             if (playerTurn.move[3] == true) {
//     //                 console.log("event 3", playerTurn.listener[3], playerTurn.move[3])
//     //                 move4arounda()
//     //                 playerTurn.listener = [false, false, false, false]
//     //                 playerTurn.move = [false, false, false, false]
//     //             }
//     //         })
//     //     }
//     // }

//     // function moveToken() {

//     //     num++
//     //     document.getElementById(`box${num}`).append(document.getElementById(`${playerTurn.zone}Token1`))
//     // }
//     // // -----------------------------------------------------------------------
//     // function bringOut(e) {
//     // }
//     // // -----------------------------------------------------------------------
//     // function makeAMove() {
//     //     dice1 = 6
//     //     dice2 = 6


//     //     //  if(dice1 == 6||dice2 == 6){
//     //     // Nobody outside && People Inside
//     //     if (dice1 == 6) {
//     //         document.getElementById(`${playerTurn.zone}Token1`).addEventListener("click", function (e) {
//     //             if (playerTurn.listener[0] == true && usedDice1 == false) {   
//     //                 if (playerTurn.position != 0)   
//     //                     token1Outside()
//     //                 playerTurn.listener[0] = false
//     //                 playerTurn.move = [true, false, false, false]
//     //                 console.log("event 1", playerTurn.listener[0], playerTurn.move[0])
//     //                 step2()
//     //                 usedDice1 = true
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token2`).addEventListener("click", function (e) {
//     //             if (playerTurn.listener[1] == true && usedDice1 == false) {
//     //                 if (playerTurn.position != 0)
//     //                     token2Outside()
//     //                 playerTurn.listener[1] = false
//     //                 playerTurn.move = [false, true, false, false]
//     //                 console.log("event 1", playerTurn.listener[1], playerTurn.move[1])
//     //                 step2()
//     //                 usedDice1 = true
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token3`).addEventListener("click", function (e) {
//     //             if (playerTurn.listener[2] == true && usedDice1 == false) {
//     //                 if (playerTurn.position != 0)
//     //                 token3Outside()
//     //                 playerTurn.listener[2] = false
//     //                 playerTurn.move = [false, false, true, false]
//     //                 console.log("event 1", playerTurn.listener[2], playerTurn.move[2])
//     //                 step2()
//     //                 usedDice1 = true
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token4`).addEventListener("click", function (e) {
//     //             if (playerTurn.listener[3] == true && usedDice1 == false) {
//     //                 if (playerTurn.position != 0)
//     //                     token4Outside()
//     //                 playerTurn.listener[3] = false
//     //                 playerTurn.move = [false, false, false, true]
//     //                 console.log("event 1", playerTurn.listener[3], playerTurn.move[3])
//     //                 step2()
//     //                 usedDice1 = true
//     //             }
//     //         })
//     //     } else if (dice2 == 6) {
//     //         document.getElementById(`${playerTurn.zone}Token1`).addEventListener("click", function (e) {
//     //             if (playerTurn.listener[0] == true && usedDice2 == false) {
//     //                 token1Outside()
//     //                 playerTurn.listener[0] = false
//     //                 playerTurn.move = [true, false, false, false]
//     //                 console.log("event 1", playerTurn.listener[0], playerTurn.move[0])
//     //                 step2()
//     //                 usedDice2 = true
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token2`).addEventListener("click", function (e) {
//     //             if (playerTurn.listener[1] == true && usedDice2 == false) {
//     //                 token2Outside()
//     //                 playerTurn.listener[1] = false
//     //                 playerTurn.move = [false, true, false, false]
//     //                 console.log("event 1", playerTurn.listener[1], playerTurn.move[1])
//     //                 step2()
//     //                 usedDice2 = true
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token3`).addEventListener("click", function (e) {
//     //             if (playerTurn.listener[2] == true && usedDice2 == false) {
//     //                 token3Outside()
//     //                 playerTurn.listener[2] = false
//     //                 playerTurn.move = [false, false, true, false]
//     //                 console.log("event 1", playerTurn.listener[2], playerTurn.move[2])
//     //                 step2()
//     //                 usedDice2 = true
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token4`).addEventListener("click", function (e) {
//     //             if (playerTurn.listener[3] == true && usedDice2 == false) {
//     //                 token4Outside()
//     //                 playerTurn.listener[3] = false
//     //                 playerTurn.move = [false, false, false, true]
//     //                 console.log("event 1", playerTurn.listener[3], playerTurn.move[3])
//     //                 step2()
//     //                 usedDice2 = true
//     //             }
//     //         })
//     //         //  step2()
//     //     } else {
//     //         console.log("No moves to make")
//     //     }
//     //     // People outside && People Inside
//     //     if (dice1 == 6) {
//     //         document.getElementById(`${playerTurn.zone}Token1`).addEventListener("click", function (e) {
//     //             if (playerTurn.listener[0] == true && usedDice1 == false) {
//     //                 if (playerTurn.position != 0)
//     //                     token1Outside()
//     //                 playerTurn.listener[0] = false
//     //                 playerTurn.move = [true, false, false, false]
//     //                 console.log("event 1", playerTurn.listener[0], playerTurn.move[0])
//     //                 step2()
//     //                 usedDice1 = true
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token2`).addEventListener("click", function (e) {
//     //             if (playerTurn.listener[1] == true && usedDice1 == false) {
//     //                 if (playerTurn.position != 0)
//     //                     token2Outside()
//     //                 playerTurn.listener[1] = false
//     //                 playerTurn.move = [false, true, false, false]
//     //                 console.log("event 1", playerTurn.listener[1], playerTurn.move[1])
//     //                 step2()
//     //                 usedDice1 = true
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token3`).addEventListener("click", function (e) {
//     //             if (playerTurn.listener[2] == true && usedDice1 == false) {
//     //                 if (playerTurn.position != 0)
//     //                     token3Outside()
//     //                 playerTurn.listener[2] = false
//     //                 playerTurn.move = [false, false, true, false]
//     //                 console.log("event 1", playerTurn.listener[2], playerTurn.move[2])
//     //                 step2()
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token4`).addEventListener("click", function (e) {
//     //             if (playerTurn.listener[3] == true && usedDice1 == false) {
//     //                 if (playerTurn.position != 0)
//     //                     token4Outside()
//     //                 playerTurn.listener[3] = false
//     //                 playerTurn.move = [false, false, false, true]
//     //                 console.log("event 1", playerTurn.listener[3], playerTurn.move[3])
//     //                 step2()
//     //                 usedDice1 = true
//     //             }
//     //         })
//     //     } else if (dice2 == 6) {
//     //         document.getElementById(`${playerTurn.zone}Token1`).addEventListener("click", function (e) {
//     //             if (playerTurn.listener[0] == true && usedDice2 == false) {
//     //                 if (playerTurn.position != 0)
//     //                     token1Outside()
//     //                 playerTurn.listener[0] = false
//     //                 playerTurn.move = [true, false, false, false]
//     //                 console.log("event 1", playerTurn.listener[0], playerTurn.move[0])
//     //                 step2()
//     //                 usedDice2 = true
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token2`).addEventListener("click", function (e) {
//     //             if (playerTurn.listener[1] == true && usedDice2 == false) {
//     //                 if (playerTurn.position != 0)
//     //                     token2Outside()
//     //                 playerTurn.listener[1] = false
//     //                 playerTurn.move = [false, true, false, false]
//     //                 console.log("event 1", playerTurn.listener[1], playerTurn.move[1])
//     //                 step2()
//     //                 usedDice2 = true
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token3`).addEventListener("click", function (e) {
//     //             if (playerTurn.listener[2] == true && usedDice2 == false) {
//     //                 if (playerTurn.position != 0)
//     //                     token3Outside()
//     //                 playerTurn.listener[2] = false
//     //                 playerTurn.move = [false, false, true, false]
//     //                 console.log("event 1", playerTurn.listener[2], playerTurn.move[2])
//     //                 step2()
//     //                 usedDice2 = true
//     //             }
//     //         })
//     //         document.getElementById(`${playerTurn.zone}Token4`).addEventListener("click", function (e) {
//     //             if (playerTurn.listener[3] == true && usedDice2 == false) {
//     //                 if (playerTurn.position != 0)
//     //                     token4Outside()
//     //                 playerTurn.listener[3] = false
//     //                 playerTurn.move = [false, false, false, true]
//     //                 console.log("event 1", playerTurn.listener[3], playerTurn.move[3])
//     //                 step2()
//     //                 usedDice2 = true
//     //             }
//     //         })
//     //         //  step2()
//     //     } else {
//     //         // Nobody outside && Nobody Inside
//     //     }
//     // }

//     // document.getElementById("roll").addEventListener("click", function () {
//     //     console.log("HMMM")
//     //     playerTurn.listener = [true, true, true, true]
//     //     playerTurn.move = [false, false, false, false]
//     //     //  usedDice1 = false
//     //     //  usedDice2 = false
//     //     makeAMove()
//     // })


//     // // }

//     // //  document.getElementById(`${playerTurn.zone}Token1`).addEventListener("click",token1Outside)
//     // //  document.getElementById(`${playerTurn.zone}Token2`).addEventListener("click",token2Outside)
//     // //  document.getElementById(`${playerTurn.zone}Token3`).addEventListener("click",token3Outside)
//     // //  document.getElementById(`${playerTurn.zone}Token4`).addEventListener("click",token4Outside)

//     // // console.log(playerTurn.zone)
//     // // changePlayer()
//     // //  document.getElementById(`${playerTurn.zone}Token1`).addEventListener("click",token1Outside)
//     // //  document.getElementById(`${playerTurn.zone}Token2`).addEventListener("click",token2Outside)
//     // //  document.getElementById(`${playerTurn.zone}Token3`).addEventListener("click",token3Outside)
//     // //  document.getElementById(`${playerTurn.zone}Token4`).addEventListener("click",token4Outside)





//     // // if(playerTurn.finished == 4)
//     // // {
//     // //     // move to nextPlayer

//     // // }
//     // // if(dice1 == 6||dice2 == 6){
//     // // console.log("i'm in " ,playerTurn, " home")

//     // // // keeps playerTurn.track of how many is left inside and not in the game board
//     // //  playerTurn.track = playerTurn.inside-1
//     // // // allows those inside come out
//     // // // gives power to the div box to bring a player out
//     // // if(playerTurn.track == 3 )
//     // // {
//     // // assigns a position to the token
//     // // console.log("here")
//     // // newPlayer()
//     // // console.log("here")
//     // // if(dice1 ==6 ){
//     // //     if(dice2 == 6){
//     // //         // an option is given to the user
//     // //         playerTurn.home.addEventListener("click",makeNewPlayer)
//     // //         document.getElementById(`box${playerTurn.position[playerTurn.track]}`).addEventListener("click",movePlayer)

//     // //         console.log("here")

//     // //        // makeAMove()
//     // //     }
//     // //     else{
//     // //     // any number
//     // //     console.log("here1")
//     // //     document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.remove(`${playerTurn.name}Token`)
//     // //     playerTurn.position[playerTurn.track] += dice2
//     // //     }}}
//     // // add time interval
//     // // document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.add(`${playerTurn.name}Token`)}
//     // //                 }else if(dice2 ==6){
//     // //                     console.log("here2")
//     // //                     document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.remove(`${playerTurn.name}Token`)
//     // //                     playerTurn.position[playerTurn.track] += dice1
//     // //                     // add time interval
//     // //                     // document.getElementById(`box${playerTurn.position[playerTurn.track]}`).classList.add(`${playerTurn.name}Token`)
//     // //                 }

//     // //             }
//     // //             // allows those inside come out
//     // //             // gives power to the div box to bring a player out
//     // //             // gives those outside permission to make moves
//     // //             else if(playerTurn.outside < 4 && playerTurn.outside > 0 ){
//     // //                 if(dice1 ==6 ){
//     // //                     playerTurn.home.addEventListener("click",makeNewPlayer)
//     // //                     document.getElementById(`box${playerTurn.position[playerTurn.track]}`).addEventListener("click",movePlayer)
//     // //                     if(dice2 == 6){
//     // //                         // depending on if playerinside >0
//     // //                         if(playerTurn.inside== 0)
//     // //                         {
//     // //                             document.getElementById(`box${playerTurn.position[playerTurn.track]}`).addEventListener("click",movePlayer)
//     // //                         }
//     // //                         else
//     // //                         playerTurn.home.addEventListener("click",makeNewPlayer)
//     // //                         document.getElementById(`box${playerTurn.position[playerTurn.track]}`).addEventListener("click",movePlayer)
//     // //                         // makeAMove()
//     // //                     }
//     // //                     else{}
//     // //             }
//     // //              // gives those outside power to make moves

//     // //         }}
//     // //         else{
//     // //             // move players
//     // //             // 
//     // //         }


//     // //     }

//     // //             // gives player the ability to go out of house
//     // //                     // brings a player out of home

//     // //             // assigns position for whose turn it is
//     // //             // switch(playerTurn.name){
//     // //             //     case ("blue"):
//     // //             //         playerTurn.position[track] =1
//     // //             //         console.log("hereee")
//     // //             //     break
//     // //             //     case ("red"):
//     // //             //         playerTurn.position[track] =14
//     // //             //         console.log("hereee")
//     // //             //     break
//     // //             //     case ("green"):
//     // //             //         playerTurn.position[track] =27
//     // //             //     break
//     // //             //     case ("yellow"):
//     // //             //         playerTurn.position[track] =40
//     // //             //     break
//     // //             //     default:
//     // //             //     console.log("error")
//     // //             // }
//     // //                     // let firstPosition =document.getElementById(`box${playerTurn.position[track]}`).classList.add('colorDiv')
//     // //                     // document.addEventListener('click',function(){
//     // //                     //     console.log("here")
//     // //                     //     console.log(blueHome.addEventListener('click',function(){
//     // //                     //     return true
//     // //                     //     }))
//     // // //                     // })
//     // // //                 if(dice1 ==6){
//     // // //                     if(dice2 ==6)
//     // // //                     {
//     // // //                         let newPlayer =false
//     // //                         let moveOldPlayer =false
//     // //                         // gives the player the ability to choose again from home
//     // //                         playerTurn.home.addEventListener("click",function(){
//     // //                             console.log("bring a new player out")
//     // //                             playerTurn.position[track-1]=0
//     // //                             document.getElementById(`box${playerTurn.position[track-1]}`).classList.add('colorDiv')
//     // //                         })
//     // //                         document.getElementById(`box${playerTurn.position[track]}`).addEventListener("click",function(){
//     // //                             console.log("move player")
//     // //                             playerTurn.position[track] += dice2
//     // //                             document.getElementById(`box${playerTurn.position[track]}`).classList.add('colorDiv')
//     // //                         })
//     // //                         playerTurn.outside += 1
//     // //                         playerTurn.inside -= 1
//     // //                         //Open when done
//     // //                        // makeAmove()


//     // //                     // brings a player out of home
//     // //                     // playerTurn.position[1]=0

//     // //                     // document.getElementById(`box${playerTurn.position[1]}`).classList.add('colorDiv')
//     // //                     //     })

//     // //                     }else{
//     // //                         playerTurn.position[track] += dice2
//     // //                         // add time interval
//     // //                         document.getElementById(`box${playerTurn.position[0]}`).classList.add('colorDiv')
//     // //                     }
//     // //                 }
//     // //                 else if(dice2 ==6){
//     // //                     playerTurn.position[track] += dice1
//     // //                     // add time interval
//     // //                     document.getElementById(`box${playerTurn.position[track]}`).classList.add('colorDiv')
//     // //                 }

//     // //         }else{
//     // //             if(playerTurn.outside == 0){
//     // //                 // no mokes to make
//     // //             }
//     // //             else{
//     // //                 // initalize each div to be able to move based on the number
//     // //             }

//     // //         } 
//     // // function stopMove(){

//     // // }
//     // // }



//     // // // console.log(blueHome)
//     // //     // for(let i =0;i<72;i++){
//     // //     //     console.log("hi")
//     // //     //     console.log(document.getElementById("zone1"))
//     // //     //     document.getElementById(`box${i}`).classList.add('colorDiv')
//     // //     //     if(i >51){
//     // //     //         console.log("turn left")
//     // //     //     }

//     // // //     // }
//     // // //     //rollDice()
//     // makeAMove()
//     // //  makeAMove()
//     //     // changePlayer()
//     //     // makeAmove()
//     //     // changePlayer()
//     //     // makeAmove()
//     //     // changePlayer()
//     //     // makeAmove()
//     //     // changePlayer()
//     //     // change the player
//     // // console.log(playerTurn)
//     // // changePlayer()
//     // // console.log(playerTurn)
//     // // changePlayer()
//     // // console.log(playerTurn)
//     // // changePlayer()
//     // // console.log(playerTurn)
//     // // changePlayer()
//     // // console.log(playerTurn)
//     // // changePlayer()
//     // console.log(playerTurn)
//     // changePlayer()
//     // console.log(playerTurn)
//     // changePlayer()
//     // console.log(playerTurn)
//     // changePlayer()
//     // console.log(playerTurn)

//     // changePlayer()
//     // console.log(playerTurn)
// })


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

let player = blue

function changePlayer() {
    console.log(player)
    if (player == blue)
        player = red
    else if (player == red)
        player = green
    else if (player == green)
        player = yellow
    else
        player = blue
}
console.log(blue, red, green, yellow)

function bringOut(index){
    if(player.position[index] == null){
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
    if(player.position[index] != null){
    console.log(`moving Token ${index} by  ${value} `)
    player.position[index] = getTokensPath(index,value)
    if(player.position[index] != "finished"){
        let targetBox = document.getElementById(`box${player.position[index]}`)
        console.log(targetBox)
        targetBox.append(document.getElementById(`${player.zone}Token${index}`))}
    }
    else{
        let endZone = document.getElementById("endZone")
        endZOne.append(document.getElementById(`${player.zone}Token${index}`))
    }
    // setInterval(function(){
    //     if(player.position[index] == goToBox)
    //     player.position[index]++
    //     targetBox = document.getElementById(`box${player.position[index]}`)
    //     console.log(targetBox)
    //     targetBox.append(document.getElementById(`${player.zone}Token${index}`))
    // },2000)
}

function getTokensPath(index,value){
    switch (player.name) {
        case ("blue"):
            if((player.position[index] +value) >56){
                console.log("Player Won")
                // won
                console.log("have not made skip turn")
                let targetBox = document.getElementById(`box${player.position[index]}`)
                targetBox.append(document.getElementById("endZone"))
                return position[index] ="finished"
                // skip turn 
            }
            else return player.position[index]+value
        case ("red"):
            if((player.position[index] +value) >51){
                // change path to start from 0
                return (player.position[index] +value) - 52
            }
            if(player.position[index]+value >12 && player.position[index]<13){
                // change path to start from 57
                return ((player.position[index] +value) - 12)+56
            }
            if(player.position[index]+value >61 ){
                console.log("Player Won")
                // won
                console.log("have not made skip turn")
                let targetBox = document.getElementById(`box${player.position[index]}`)
                targetBox.append(document.getElementById("endZone"))
                return position[index] ="finished"
            }
            else return player.position[index]+value
        case ("green"):
            if((player.position[index] +value) >51){
                // change path to start from 0
                return (player.position[index] +value) - 52
            }
            if(player.position[index] +value >25 && player.position[index]<26){
                // change path to start from 62
                return ((player.position[index] +value) - 25)+61
            }
            if(player.position[index] +value >66){
                // won
                console.log("have not made skip turn")
                let targetBox = document.getElementById(`box${player.position[index]}`)
                targetBox.append(document.getElementById("endZone"))
                return position[index] ="finished"
            }
            else return player.position[index]+value
        case ("yellow"):
            if(player.position[index]+value >51){
                // change path to start from 0
                return (player.position[index] +value) - 52
            }
            if(player.position[index]+value >38 && player.position[index]<39){
                // change path to start from 67
                return ((player.position[index] +value) - 38)+66
            }
            if(player.position[index] >71){
                console.log("Player Won")
                // won
                console.log("have not made skip turn")
                let targetBox = document.getElementById(`box${player.position[index]}`)
                targetBox.append(document.getElementById("endZone"))
                return position[index] ="finished"
            }
            else return player.position[index]+value
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
function playersRoll(){
    diceButton = document.getElementById("roll")
    diceButton.addEventListener("click",function(){
        if(gameOn == false){
            gameOn =true
            dice1= 6 //rollDice()
            dice2= 6 //rollDice()
            dice1Used = false
            dice2Used = false
            console.log(dice1,dice2)
            tokenMoves()
        }
    })
}

function tokenMoves(){
        if(dice1 == 6){
            dice2Used =true
            for(let i=1;i<5;i++){
                 document.getElementById(`${player.zone}Token${i}`).addEventListener("click",function(e){
                    if (dice1Used == false && player.position[i] == null && colorCheck(e)) {
                        console.log(e.target.classList[0] ==`${player.name}Token`)
                        console.log("dice1")
                        gameOn =true
                        bringOut(i)
                        dice1Used = true
                        setTimeout(()=>{dice2Used =false},200) 
                    }
                 })
                 document.getElementById(`${player.zone}Token${i}`).addEventListener("click",function(e){
                    if (dice1Used == false && player.position[i] != null && colorCheck(e)) {
                        console.log(e.target.zone)
                        console.log("dice1")
                        gameOn =true
                        moveToken(i,dice1)
                        dice1Used = true
                        setTimeout(()=>{dice2Used =false},200) 
                    }
                 })
            }
            if(dice2 ==6){
                for(let i=1;i<5;i++){
                    document.getElementById(`${player.zone}Token${i}`).addEventListener("click",function(e){
                       if (dice2Used == false && player.position[i] == null && colorCheck(e)) {
                        console.log("dice2")
                        bringOut(i)
                        dice1Used = true
                        dice2Used =true
                        gameOn =false
                        changePlayer()
                        start()
                       }
                    })
                    document.getElementById(`${player.zone}Token${i}`).addEventListener("click",function(e){
                       if (dice2Used == false && player.position[i] != null && colorCheck(e)) {
                        console.log("dice2")
                           moveToken(i,dice2)
                           dice1Used = true
                           dice2Used =true
                           gameOn =false
                           changePlayer()
                           start()
                       }
                    })
               }
            }else{
                for(let i=1;i<5;i++){
                        document.getElementById(`${player.zone}Token${i}`).addEventListener("click",function(e){
                        if (dice2Used == false && player.position[i] != null && colorCheck(e)) {
                            console.log("dice2")
                            moveToken(i,dice2)
                            dice1Used = true
                            dice2Used =true
                            gameOn =false
                            changePlayer()
                            start()
                        }
                 })}
            }
        }else if(dice2 == 6){
            dice1Used =true
            for(let i=1;i<5;i++){
                document.getElementById(`${player.zone}Token${i}`).addEventListener("click",function(e){
                   if (dice2Used == false && player.position[i] == null && colorCheck(e)) {
                    console.log("dice2")
                       bringOut(i)
                       dice2Used =true
                       gameOn =true
                       setTimeout(()=>{dice1Used =false},200)
                   }
                })
                document.getElementById(`${player.zone}Token${i}`).addEventListener("click",function(e){
                   if (dice2Used == false && player.position[i] != null & colorCheck(e)) {
                    console.log("dice2")
                       moveToken(i,dice2)
                       dice2Used =true
                       gameOn =true
                       setTimeout(()=>{dice1Used =false},200)
                   }
                })
            }
                    for(let i=1;i<5;i++){
                        document.getElementById(`${player.zone}Token${i}`).addEventListener("click",function(e){
                            if (dice1Used == false && player.position[i] != null && colorCheck(e)) {
                                console.log("dice1")
                                console.log(dice1)
                                moveToken(i,dice1)
                                dice1Used = true
                                dice2Used =true
                                gameOn =false
                                changePlayer()
                                start()
                            }
                        })
                    }
        }else{
            if(player.inside != 4){
            dice2Used =true
            for(let i =1;i<5;i++){
            document.getElementById(`${player.zone}Token${i}`).addEventListener("click",function(e){
                if (dice1Used == false && player.position[i] != null && colorCheck(e)) {
                    console.log("dice1")
                    moveToken(i,dice1)
                    dice1Used = true
                    gameOn =true
                    setTimeout(()=>{dice2Used =false},200) 
                }
             })
            document.getElementById(`${player.zone}Token${i}`).addEventListener("click",function(e){
                if (dice2Used == false && player.position[i] != null && colorCheck(e)) {
                 console.log("dice2")
                    moveToken(i,dice2)
                    dice2Used =true
                    dice1Used =true
                    gameOn =false
                    changePlayer()
                    start()
                }
             })}}
             else{
                for(let i =1;i<5;i++){
                    // document.getElementById(`${player.zone}Token${i}`).addEventListener("click",function()
                    // {
                    //     console.log("NO moves to make")
                    // })
                }
            }
        }
}

function start(){
    playersRoll()

    if(dice1Used == true ){
        if(dice1 == 6){

        }else{

        }
    }
    if(dice2Used == false){

    }
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