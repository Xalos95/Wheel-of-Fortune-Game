#Inspiration 
I decided to make a mini game around the popular game show Wheel of Fortune due to trying to have a tested and interactive experience with HTML, CSS, JavaScript. In addition, i also got inspired by my love of puzzles which I 
have been doing so since i was 9 in where i completed a 15,000 piece puzzle in a week. As i kept making sure to make this game i was making sure that it was a good challenge for me in where i can practice my weaknesses and
hope to succeed as it will be Javascript heavy.

# Wheel-of-Fortune-Game-Instructions
1) To begin the game, the player will need to spin the wheel to aquire points to guess a letter on the scoreboard
2) On the wheel there are a few prizes ranging from 500-1000 points, a free spin for more points, or going bankrupt
3) If the player spins into bankrupt they will loose all points and the game will end
4) To be able to take a guess at the scoreboard you will need a minimum of 200 points or the player can guess to solve the puzzle anytime
5) As you guess incorrectly you will be deducted 200 points each time until a guess cannot be made and if guessed correctly the player will recieve double the points
6) The game will also end if all the puzzles available were solved, and the player's points will be recorded so the player can try again and beat their old score

#Impovements
As i did reasearch and began my code I have seen many different vesions of the game and it was an amazing eperience to see them create their own game. Howver i have come across some stumps that i should have thought about a
bit deeper, here is a list of problems i acame across:

1) The layout i belive was a difficult section in where my practice with flex/flexbox is a bit out of place due to how editing inside the flex areas can have so many properties that i didnt know how to use. In addition,
  having many divs does through me off a bit but as i got to fixing the scrolling issue i discovered that i could place the scorboard and the wheel in the sam div to be side by side. As i keep experimenting in the developer
  tools it is making me discover more and more about the things that we learned in class that i have forgotten.

2) The next area i can improve on is the javascript area in where i can see my code was a long list of functions with many different areas that made it difficult to find the problems. In the console i was able to find the
   problems but as i tried to fix them more appeared. In the future i believe that separating my javascript files into different folders to be more organized will help me focus on the major areas that i need to work on. In
   not doing so,  i always had minutes wasted on finding the small code that was the problem and having to scroll a long paragraph of code tro find it. I believe the reason i do this is because I forget that it's an option
   and need all my code in one folder. I will continue to practice on this mini game to improve itself and myself in practicing the essentials.

3) The functions were another issue in where i belive the scope of my variables were to short or were overwritten in that the value would return null or the wrong value
   and so the result that i need back didn't work. An example is my shuffle array function to shuffle the puzzles array and i have it return a random object in that array into another empty array. The issue was the scope in where the function call or the function itself was not declared even though the variablle aray i made was empty. Another solution could be that the constant nesting in the main game function is confusing the logic and therefore giving off values that it shouldn't return or have, breaking and adding comments into what each section does should help me determine the issue but as i kept chnaging the variables it did little to no change. 

4) Help is one of my weaknesses whenim in a class and that is what prevents me from achieving what im trying to do in my code. Though google is very helpful my selfishness on asking for help on my code is not healthy and i
   struggle until the end whenever i get close to the end. The developer tools is super helpful and i tend to ignore that as well since it will allow me to see what variables are being declared or working right along the
   way. Coding this project has been difficult by myself and though i still have a lot to improve on it, it will be an eye opening experience. And cosing woth help by my peers or the developer tools should not discourage
   me from future coding whenit comes to more difficult project for companies/myslef. 

#Credits
1) video on making the spin wheel: https://www.youtube.com/watch?v=F3-lK_-PQr0
2) An actual working code for the game made on an online IDE which i used to give me som eideas on how the Javascript can work: https://jsfiddle.net/maniator/H5LKy/181/
3) A video on how to make a grid for the scoreboard and have letters appear inside: https://www.youtube.com/watch?v=oKM2nQdQkIU
