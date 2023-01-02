
let playerScore = 0;
let compScore = 0;

   
  
  const pick = ["rock", "paper", "scissors"];


   
   function playRound(playerSelection, computerSelection) {

      if(playerSelection == computerSelection){
         return  "It's a draw! Try Again.";
      }
   
        if(playerSelection == "rock") {
         if(computerSelection == "paper"){
            compScore ++;
            return "You Lose! Paper beats Rock.";
         }else{
            playerScore ++;
           return "You Win! Rock beats Scissors.";
         }
        }
   
        if(playerSelection == "paper"){
         if(computerSelection == "scissors"){
            compScore ++;
            return "You Lose! Scissors beats Paper .";   
         }else {
            playerScore ++;
           return "You Win! Paper beats Rock.";
         }
        }
   
        if(playerSelection == "scissors"){
         if(computerSelection == "rock"){
            compScore ++;
           return "You Lose! Rock beats Scissors.";
         }else{
            playerScore ++;
            return  "You Win! Scissors beats Paper.";
          }
        }
       
     }
     
     for (let round = 1; round < 6; round++) {
      while(compScore < 3 && playerScore < 3 && round < 6){
         console.log("** ROUND" + " " + round + " **\n");

         let playerSelection = prompt("What is your choice?" , " ").toLowerCase();
         
         function getComputerChoice() {
            let choice = pick[Math.floor(Math.random() * pick.length)];
            return choice;
}

            console.log(getComputerChoice());
            let computerSelection = getComputerChoice();

         
          
        console.log("\n" + playRound(playerSelection, computerSelection));

         console.log("\nThe score is" + " " + playerScore + " "+ "Player," + " " + compScore + " " + "Computer\n" );

         
           
      }  
   }
      

      
   

   if (playerScore > compScore){
      console.log("*******************\nYou win!\n*******************");
  }
  else if (playerScore < compScore){
      console.log("*******************\nComputer wins!\n*******************");
  }
  else {
      console.log("*******************\nIt's a gremlin tie!\n*******************");
  }
  



 