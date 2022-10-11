//get your score container
const playerScore = document.querySelector('#yourScorePoints');

//get computer score container
const pcScore = document.querySelector('#computerScorePoints');

//get result container
const result = document.querySelector('.resultsContainer');

let yourScore = 0;
let computerScore = 0;

//game play//

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
    
        console.log('computer choose: ',result.toUpperCase());
        return result;    
} 
    

   
function playRound(playerChoice,pcChoice){
    
    playerChoice = playerChoice.toUpperCase();
    pcChoice = pcChoice.toUpperCase();
    console.log(playerChoice,pcChoice);
    if(yourScore < 5 && computerScore < 5){

        if (playerChoice === 'ROCK' && pcChoice === 'PAPER'){
            result.textContent = "You Lose! Paper beats Rock";
            pcScore.textContent = (computerScore += 1);
        
        }else if (playerChoice === 'ROCK' && pcChoice === 'ROCK'){
            result.textContent = "No one wins! Rock and Rock are a tie!";
            
        }else if (playerChoice === 'ROCK' && pcChoice === 'SCISSORS'){
            result.textContent = "You won! Rock beats Scissors!";
            playerScore.textContent = (yourScore += 1);

        }else if (playerChoice === 'PAPER' && pcChoice === 'PAPER'){
            result.textContent = "No one wins! Paper and Paper are a tie!";
            
        }else if (playerChoice === 'PAPER' && pcChoice === 'ROCK'){
            result.textContent = "You won! Paper beats Rock!";
            playerScore.textContent = (yourScore += 1);
        
        }else if (playerChoice === 'PAPER' && pcChoice === 'SCISSORS'){
            result.textContent = "You lose! Scissors beats Paper!";
            pcScore.textContent = (computerScore += 1);
            
        }else if (playerChoice === 'SCISSORS' && pcChoice === 'PAPER'){
            result.textContent = "You won! Scissors beast Paper";
            playerScore.textContent = (yourScore += 1);
            
        }else if (playerChoice === 'SCISSORS' && pcChoice === 'ROCK'){
            result.textContent = "You lose! Rock beats Scissors";
            pcScore.textContent = (computerScore += 1);

        }else if(playerChoice === 'SCISSORS' && pcChoice === 'SCISSORS'){
            result.textContent = "No one wins! Scissors and Scissors are a tie!";
        
        }}
    //to print out the winner and restart the game    
    if (computerScore == 5){
        console.log("OOPS! THE PC BEATED YOU!");
        result.textContent = "Good try! but I BEAT YOU!!!";
        button.style.visibility = 'visible';

    }else if(yourScore == 5){
        console.log("YOU BEATED THE PC!");
        result.textContent = "Congratulations!! YOU BEAT ME!!";
        button.style.visibility = 'visible';
    }

    } 

//click rock
const rock = document.getElementById('imgRock');
rock.addEventListener('click', () => {
    playerChoice = 'rock';
    pcChoice = getComputerChoice();
    playRound(playerChoice, pcChoice);
})

//click paper
const paper = document.getElementById('imgPaper');
paper.addEventListener('click' , () => {
    playerChoice = 'paper';
    pcChoice = getComputerChoice();
    playRound(playerChoice, pcChoice);
})

//click scissors
const scissors = document.getElementById('imgScissors');
scissors.addEventListener('click' , () => {
    playerChoice = 'scissors';
    pcChoice = getComputerChoice();
    playRound(playerChoice, pcChoice);
})

// click try again button
const button = document.getElementById('again');
button.addEventListener('click', () => {
    yourScore = 0;
    playerScore.textContent = yourScore;
    computerScore = 0;
    pcScore.textContent = computerScore;
    result.textContent = "";
    button.style.visibility = 'hidden';
})







// function runClick(e) {

//     var playerChoice = e.toUpperCase();
//     console.log("player choose:" +" "+playerChoice);
//     return playRound(playerChoice);
//     //return playerChoice;
    
    
// }
// const buttons = document.querySelectorAll('button');


//         buttons.forEach((button) => {
    
//             button.addEventListener('click', () => {
//             runClick(button.textContent);
//           });
//         });
       

