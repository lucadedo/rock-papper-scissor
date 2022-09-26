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
    
getComputerChoice();

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    console.log(playerSelection,computerSelection);
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER'){
        let result = "You Lose! Paper beats Rock";
        return result;

    }else if (playerSelection === 'ROCK' && computerSelection === 'ROCK'){

        let result = "No one wins! Rock and Rock are tie!";
        return result;

    }else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        
        let result = "You won! Rock beats Scissors!"
        return result;
    }


}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));

