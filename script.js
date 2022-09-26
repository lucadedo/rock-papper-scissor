function getComputerChoice(){
    let result = Math.floor(Math.random() * 3);
    if (result===0){
        result = 'Rock';
        
    }else if(result === 1){
            result = 'Paper';
    }else {
        result = 'Scissors';
        }
    
    console.log(result);
    return result;
    
} 
    
getComputerChoice();