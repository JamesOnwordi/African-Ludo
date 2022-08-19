let blue,yellow,green,red
blue=red=yellow=green ={
    inside:4,
    outside:0,
    finished:0
}

console.log(blue,red,green,yellow)


function rollDice(){
    const dice =[1,2,3,4,5,6]

    let dice1 =dice[Math.floor(Math.random()*6)]
    console.log(dice1)
    let dice2 =dice[Math.floor(Math.random()*6)]
    console.log(dice2)
}

document.addEventListener("DOMContentLoaded",function()
{
    for(let i =0;i<72;i++){
        console.log("hi")
        console.log(document.getElementById("zone1"))
        document.getElementById(`box${i}`).classList.add('colorDiv')
        if(i >51){
            console.log("turn left")
        }
        
    }
    rollDice()
})
