# Ludo

## Description Of The App

Ludo is a strategy board game for two to four players, in which the players race their four tokens
from start to finish according to the rolls of a dice. This app is an emulation of the real board game, it purpose is to give the user the same 
experience and satisfaction a real board game would produce. 

# Wireframe
![Wireframe](https://wireframe.cc/MMhJV3)

## Approach Taken

First off I created a lot of divs to make the board and numbered them from 0 all the way to 71. 
It took a while to figure out how I was going to represent each token. I was going to make the divs change color when clicked on,
but a lot of question where developed. So I represented each token with a div, that gave me the ability to pick on each token.
I used divs to also represent the pathway where the tokens would pass. Also had to create an algorithm for the token to go round the walkway
The pathway have sections where only a token of a specific color can move on. Since the div starts from 0 all the way to 71. some tokens won't be
favoured to move freely (code wise) so I made an algorithm to help reduce that effect. I haven't completely patched the bug produced by this section,
but an update would come soon... hopefully I don't get carried away with other projects
http://www.gunplot.net/main/sites/default/files/uckers/ludoboardlayout.gif

## a link to the deployed live site 

https://jamesonwordi.github.io/Ludo/

## Technologies Used

I made use of HTML DIVs, button and the regular p and h1 tags
Made use of CSS, I got to play with flex and grid a lot since I had more than 71 divs to align
Lastly I made use of Javascript. EventListener pissed me off cause I didn't know if I could pause it or not,
but I think I bullied it instead, made use of the regular loops and conditional statements, also functions

## Post-project Reflection

It was a fun experience, I feel I didn't give my MVP enough attention at first cause I was so eager to start the project,
but lesson learnt, one needs to plan first before embarking on such adventures. also got to learn new error statements and also 
the importance of console.log when debugging. can't wait to learn new things and come back to edit this piece

## Sources Used

mdn was my friend for figuring out how some method worked
