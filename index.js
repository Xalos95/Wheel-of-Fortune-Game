
// function to have the game begin
GAMERULES = (function () 
{
    

    //the many different puzzles to have populate the scoreboard
    puzzles = 
    [
        "WITH GREAT POWER COMES GREAT RESPONSIBILTY",
        "DARK KNIGHT RISES",
        "NO PAIN NO GAIN",
        "EASIER SAID THAN DONE",
        "FORCE EQUALS MASS TIMES ACCELERATION",
        "THE BEST THINGS IN LIFE ARE THE LITTLE THINGS",
        "NARUTO UZUMAKI",
        "NOTHING"
    ],
    puzzle = shuffle(puzzles),
    vowels = ['A', 'E', 'I', 'O', 'U'],
    currPoints = 0,
    guessLetter = document.getElementById('letter'),
    newButton = document.getElementById('newPuzzle'),
    points = document.getElementById('points'),
    solve = document.getElementById('solvePuzzle');

    //function to shuffle the array of puzzles
    shuffle = function(array)
    {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    },

    //the main function that will run as the game is being played
    return function GAME() 
    {
    
        var currentPuzzleArray = [],//empty array for the current puzzle chosen
        lettersInPuzzle = [],//make the appropriate aray size for the picked puzzle
        guessedArray = [],
        puzzleSolved = false,//as long as the puzzle hasn't been solved it will always be false

        //function to help create the scoreboard
        createBoard = function(currentPuzzle) {
            guessedArray = [];
            lettersInPuzzle = [];
            lettersGuessed = 0;
            puzzleSolved = false;
            currentPuzzleArray = currentPuzzle.split("");
            var word = document.createElement('div');
            displayArea.appendChild(word);
            word.className = "word";
            for (var i = 0; i < currentPuzzleArray.length; ++i) 
            {
            var span = document.createElement('div');
            span.className = "wordLetter ";

            if (currentPuzzleArray[i] != " ") 
            {
                span.className += "letter";
                if (!(currentPuzzleArray[i] in oc(lettersInPuzzle))) 
                {
                    lettersInPuzzle.push(currentPuzzleArray[i]);
                }
                word.appendChild(span);
            }
            else 
            {
                span.className += "space"
                word = document.createElement('div');
                displayArea.appendChild(word);
                word.className = "word";
                word.appendChild(span);
                word = document.createElement('div');
                displayArea.appendChild(word);
                word.className = "word";
            }

            span.id = "letter" + i;
        }

        var clear = document.createElement('div');
        displayArea.appendChild(clear);
        clear.className = "clear";
    },

    

    solvePuzzle = function() 
    {
        if (!puzzleSolved && !createGuessPromt("SOLVE THE PUZZLE?", null, true)) 
        {
            alert("Puzzle NOT solved...");
        }
    },
    guessLetter = function(guess, isVowel, solvingPuzzle) 
    {
        var timesFound = 0;
        isVowel = isVowel == undefined ? false : true;
        solvingPuzzle = solvingPuzzle == undefined ? false : true;
        //find it:
        if (guess.length && !puzzleSolved)
        {
            if ((guess in oc(letter)) && !isLetter && !solvingPuzzle) 
            {
                alert("Cannot guess a vowel right now!");
                return false;
            }
            if (isVowel && !(guess in oc(vowels)) && !solvingPuzzle) 
            {
                alert("Cannot guess a consanant right now!");
                return false;
            }
            for (var i = 0; i < currentPuzzleArray.length; ++i) 
            {
                if (guess == currentPuzzleArray[i])
                 {
                    var span = document.getElementById("letter" + i);
                    if (span.innerHTML != guess) 
                    {
                        //found it
                        ++timesFound;
                    }
                    span.innerHTML = guess;
                    if (guess in oc(lettersInPuzzle) && !(guess in oc(guessedArray)))
                    {
                        guessedArray.push(guess);
                    }
                }
            }

            if (guessedArray.length == lettersInPuzzle.length) 
            {
                alert("PUZZLE SOLVED!");
                puzzleSolved = true;
            }

            return timesFound;
        }
        return false;
    },
    nextRound = function() 
    {
        ++round;
        if (round < puzzles.length) 
        {
            while (displayArea.hasChildNodes()) 
            { //remove old puzzle
                displayArea.removeChild(displayArea.firstChild);
            }
            createBoard(puzzles[round]);
        }
        else alert("No more puzzles!");
    },

    updatePoints = function() 
    {
        points.innerHTML = currentPoints;
    },

    //wheel points based on the spin
    spinWheelfn = function(amt) 
    {
        clearTimeout(spinTimeout);
        if (!puzzleSolved) {
            modifier -= slowdownSpeed;
            if (amt == undefined) 
            {
                amt = parseInt(wheel.getAttribute('data-rotation'));
            }
            rotateElement(wheel, amt);
            if (modifier > 0) 
            {
                spinTimeout = setTimeout(function() 
                {
                    spinWheelfn(amt + modifier);
                }, 1000 / 5);
            }
            else {
                modifier = spinModifier();
                var card = cards[Math.floor(Math.round(parseInt(wheel.getAttribute('data-rotation')) % 360) / 15)];
                switch (parseInt(card)) {
                case 0:
                    alert("BANKRUPT!");
                    currentMoney = 0;
                    break;
                case -1:
                    alert("FREE SPIN!");
                    break;
                
                default:
                    var timesFound = createGuessPromt("YOU SPUN A " + card + " PLEASE ENTER A LETTER");
                    currentPoints += (parseInt(card) * timesFound);
                }

                updateMoney();
            }
        }
    },
    guessTimes = 0,
    createGuessPromt = function(msg, isVowel, solvingPuzzle) {
        solvingPuzzle = solvingPuzzle == undefined ? false : true;
        if (!puzzleSolved) {
            var letter = prompt(msg, "");
            if (letter) {
                var guess = '';
                if (!solvingPuzzle) {
                    guess = letter.toUpperCase().charAt(0)
                }
                else {
                    guess = letter.toUpperCase().split("");

                    function arrays_equal(a, b) {
                        return !(a < b || b < a);
                    };
                    if (arrays_equal(guess, currentPuzzleArray)) {
                        for (var i = 0; i < guess.length; ++i) {
                            guessLetter(guess[i], isVowel, solvingPuzzle);
                        }
                    }
                    return puzzleSolved;
                }
                var timesFound = guessLetter(guess, isVowel, solvingPuzzle);
                if (timesFound === false) {
                    ++guessTimes;
                    if (guessTimes < 5) {
                        return createGuessPromt(msg, isVowel, solvingPuzzle);
                    }
                }
                guessTimes = 0;
                return timesFound;
            }
            else {
                ++guessTimes;
                if (guessTimes < 5) {
                    return createGuessPromt(msg, isVowel, solvingPuzzle);
                }
            }
        }
        return false;
    };
    

    function bindEvent(el, eventName, eventHandler) {
    if (el.addEventListener) 
    {
        el.addEventListener(eventName, eventHandler, false);
    } else if (el.attachEvent) 
    {
        el.attachEvent('on' + eventName, eventHandler);
    }
}

bindEvent(letter, "click", function() 
{
    if (currPoints > 200) 
    {
        if (createGuessPromt("PLEASE ENTER A VOWEL", true) !== false) currentPoints -= 100;
    }
    else 
    {
        alert("You need more than 100 to guess");
    }

    updatePoints();
});

bindEvent(newButton, "click", nextRound);
bindEvent(solve, "click", function() 
{
    solvePuzzle();
});

this.start = function() 
{
    createBoard(puzzles[round]);
    };
}
})()

game = new GAMERULES;