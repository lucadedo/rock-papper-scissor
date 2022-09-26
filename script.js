function getComputerChoice(){
    let result = Math.floor(Math.random() * 3);
    console.log(result);
    if (result===0){
        result = 'Rock';
        
    }else if(result === 1){
            result = 'Paper';
    }else {
        result = 'Scissors';
        }
    
    console.log('computer choose: ',result);
    return result;    
} 
    

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    console.log(playerSelection,computerSelection);
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER'){
        let result = "You Lose! Paper beats Rock";
        return result;

    }else if (playerSelection === 'ROCK' && computerSelection === 'ROCK'){

        let result = "No one wins! Rock and Rock are a tie!";
        return result;

    }else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        
        let result = "You won! Rock beats Scissors!";
        return result;

    }else if (playerSelection === 'PAPER' && computerSelection === 'PAPER'){

        let result = "No one wins! Paper and Paper are a tie!";
        return result;

    }else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){

        let result = "You won! Paper beats Rock!";
        return result;

    }else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){

        let result = "You lose! Scissors beats Paper!";
        return result;

    }else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){

        let result = "You won! Scissors beast Paper";
        return result;

    }else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){

        let result = "You lose! Rock beats Scissors";
        return result;

    }else if(playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS'){

        let result = "No one wins! Scissors and Scissors are a tie!";
        return result;

    }

        


}

const playerSelection = prompt("enter your choice:");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));

