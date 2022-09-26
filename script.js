let computerScore = 0;
let playerScore = 0;


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
        computerScore++;
        console.log("computer scored: " + computerScore);
        return result + " " + computerScore;
        

    }else if (playerSelection === 'ROCK' && computerSelection === 'ROCK'){

        let result = "No one wins! Rock and Rock are a tie!";
        return result;

    }else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        
        let result = "You won! Rock beats Scissors!";
        playerScore++;
        console.log("You scored: " + playerScore);
        return result;

    }else if (playerSelection === 'PAPER' && computerSelection === 'PAPER'){

        let result = "No one wins! Paper and Paper are a tie!";
        return result;

    }else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){

        let result = "You won! Paper beats Rock!";
        playerScore++;
        console.log("You scored: " + playerScore);
        return result;

    }else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){

        let result = "You lose! Scissors beats Paper!";
        computerScore++;
        console.log("computer scored: " + computerScore);
        return result + " " + computerScore;

    }else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){

        let result = "You won! Scissors beast Paper";
        playerScore++;
        console.log("You scored: " + playerScore);
        return result;

    }else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){

        let result = "You lose! Rock beats Scissors";
        computerScore++;
        console.log("computer scored: " + computerScore);
        return result + " " + computerScore;

    }else if(playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS'){

        let result = "No one wins! Scissors and Scissors are a tie!";
        return result;

    }
    
}




function game(){
    for (let i = 0 ; i < 30 ; i++){

        const playerSelection = prompt("Rock , Paper or Scissors?  ");
        const computerSelection = getComputerChoice();
       
        console.log(playRound(playerSelection,computerSelection));
        console.log("YOUR SCORE: "+ playerScore + " " + "PC SCORE: " + computerScore)
        if (playerScore === 5 || computerScore === 5){
            if (computerScore===5){
                console.log("THE PC BEATED YOU!");
            }else if(playerScore===5){
                console.log("YOU BEATED THE PC!");
            }
            break;
        }
        
          
    }

}

game();