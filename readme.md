# Ludo

## Description Of The App

Ludo is a strategy board game for two to four players, in which the players race their four tokens
from start to finish according to the rolls of a dice. This app is an emulation of the real board game, it purpose is to give the user the same 
experience and satisfaction a real ludo board would. 

## Approach Taken
My first step was creating the board, I made a base for each player where all four tokens would be originally placed, then I made the pathways the tokens would follow to get to their homes. I accomplished that by compacting 18 divs in a main div and sorting their position out, i had a total of 72 divs created and gave each and every one an id of "box"i where i represent the number of the div id starting from 0 all the way to 71.
After the board was created I made the tokens, used divs as well for each token to make it movable. then i used a setInterval to move the tokens around the board. since each players token had a different home the starting position was always different so I made a function that returns where each token should be whenever the function is called. for example the starting box for a yellow token would be div 40 and each token moves clock wise so the token gets to 51 the function returns a 0, to keep the flow of the game.
![Wireframe](LudoBoard.png)

<!-- algorithm -->

## a link to the deployed live site 

https://jamesonwordi.github.io/Ludo/

## Technologies Used

I made use of HTML DIVs, button and the regular p and h1 tags
Made use of CSS, I got to play with flex and grid a lot since I had more than 71 divs to align
Lastly I made use of Javascript. EventListener pissed me off cause I didn't know if I could pause it or not,
but I think I bullied it instead, made use of the regular loops and conditional statements, also functions

## Post-project Reflection

I learnt a lot embarking on this project, the most important lesson is to always come up with a plan before starting any journey. I believe because I was too excited and I did not really come up with any base to always look to check if I was untrack, so I got carried away trying to come up with more complex ideas and this affected me while working on the project. Always have a layed out plan when embarking on any project, going with the flow would always bring confusion.
I learnt a lot while using addEventListeners, because of the game I choose eventListeners had to be on at certain period of the game and I didn't realize that I felt there was a way to put a pause to it, but had to figure out the hard way. I still believe there is a way to work without using conditional statement inside the Listeners so I'll keep on practicing using it.
Lastly I learnt that creating codes for what one likes is always a fun thing to do, you'll always push yourself to accomplish it. Unlike this readme... But keeping records for other people to be aware of what is going on is important too. I've learnt that


## Credit/Sources
“How to Play Ludo” Wikipedia, wikiHow Staff, May 2, 2021, [URL](https://www.wikihow.com/Play-Ludo).
