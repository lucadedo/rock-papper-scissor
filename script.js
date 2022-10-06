
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
    
        console.log('computer choose: ',result.toUpperCase());
        return result;    
} 
    

   
function playRound(playerChoice,pcChoice){
    
    pcChoice = getComputerChoice().toUpperCase();
    console.log(playerChoice,pcChoice);
    

    if (playerChoice === 'ROCK' && pcChoice === 'PAPER'){
        
        let result = "You Lose! Paper beats Rock";
        computerScore++;
        console.log("computer scored: " + computerScore + " " + result);
        return result + " " + computerScore;
        
    
    }else if (playerChoice === 'ROCK' && pcChoice === 'ROCK'){
    
        let result = "No one wins! Rock and Rock are a tie!";
        return result;
    
    }else if (playerChoice === 'ROCK' && pcChoice === 'SCISSORS'){
        
        let result = "You won! Rock beats Scissors!";
        playerScore++;
        console.log("You scored: " + playerScore);
        return result;
    
    }else if (playerChoice === 'PAPER' && pcChoice === 'PAPER'){
    
        let result = "No one wins! Paper and Paper are a tie!";
        return result;
    
    }else if (playerChoice === 'PAPER' && pcChoice === 'ROCK'){
    
        let result = "You won! Paper beats Rock!";
        playerScore++;
        console.log("You scored: " + playerScore);
        return result;
    
    }else if (playerChoice === 'PAPER' && pcChoice === 'SCISSORS'){
    
        let result = "You lose! Scissors beats Paper!";
        computerScore++;
        console.log("computer scored: " + computerScore);
        return result + " " + computerScore;
    
    }else if (playerChoice === 'SCISSORS' && pcChoice === 'PAPER'){
    
        let result = "You won! Scissors beast Paper";
        playerScore++;
        console.log("You scored: " + playerScore);
        return result;
    
    }else if (playerChoice === 'SCISSORS' && pcChoice === 'ROCK'){
    
        let result = "You lose! Rock beats Scissors";
        computerScore++;
        console.log("computer scored: " + computerScore);
        return result + " " + computerScore;
    
    }else if(playerChoice === 'SCISSORS' && pcChoice === 'SCISSORS'){
    
        let result = "No one wins! Scissors and Scissors are a tie!";
        return result;
    
    }
    
}


function game(){

    

        //const playerChoice = runClick();
        //const pcChoice = getComputerChoice();
       
        //console.log(playRound(playerChoice,pcChoice));
        const buttons = document.querySelectorAll('button');


        buttons.forEach((button) => {
    
            button.addEventListener('click', () => {
            runClick(button.textContent);
          });
        });
       
        console.log("YOUR SCORE: "+ playerScore + " " + "PC SCORE: " + computerScore);

        if (playerScore === 5 || computerScore === 5){
            if (computerScore===5){
                console.log("THE PC BEATED YOU!");
            }else if(playerScore===5){
                console.log("YOU BEATED THE PC!");
            }
            
        }
        
          
}


game();

          // DOM writing //


// var btn1 = document.getElementById('button1');
// btn1.addEventListener('click',runClick);
// var btn2 = document.getElementById('button2')
// btn2.addEventListener('click' , runClick);
// var btn3 = document.getElementById('button3').addEventListener('click' , runClick(button3.textContent));



// e.preventDefault;
// const buttons = document.querySelectorAll('button');


// buttons.forEach((button) => {

//     button.addEventListener('click', () => {
//     runClick(button.textContent);
//   });
// });


function runClick(e) {

    var playerChoice = e.toUpperCase();
    console.log("player choose:" +" "+playerChoice);
    return playRound(playerChoice);
    //return playerChoice;
    
    
}

