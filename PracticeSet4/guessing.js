//User enters a max number & then tries to guess a random genrated number between 1 to max.

const max = prompt("Enter the max number");

const random = Math.floor(Math.random()*max) + 1;


let guess = prompt("Guess the Number");

while(true){
    if(guess == "quit"){
        alert("User Quit");
        break;
    }

    if(guess == random){
        alert(`You are right Congrats !! random Number was ${random}`);
        break;
    }
    else if(guess < random){
        guess = prompt("HINT : Your Guess is small. Please guess larger Number");
    }else{
        guess = prompt("HINT : Your Guess is large. Please guess larger Number");
    }
} 