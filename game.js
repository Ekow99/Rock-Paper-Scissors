let playerScore = 0;
let compScore = 0;
let round = 1;
let roundLimit = 5;

const pick = ["rock", "paper", "scissors"];

introGame()


function introGame() {
   console.log("*******************\nWelcome To Ekow's Paper - Rock - Scissors Game!\n*******************");

   console.log("*******************\nPlease Click on the Start Button to Begin !!\n*******************");

   showStartButton()
}

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

      round++
       
   }

   function calFinalScore() {
              
      if (playerScore > compScore){
         console.log("*******************\nYou win!\n*******************");
      }
      else if (playerScore < compScore){
         console.log("*******************\nComputer wins!\n*******************");
      }
      else {
         console.log("*******************\nIt's a gremlin tie!\n*******************");
      }
   }

   function showStartButton() {
      // query div container
      const container = document.querySelector("#container");

      // creates a button div
      const div = document.createElement('div');
      div.classList.add('buttons');
      container.appendChild(div);
      
      // query the button element by class
      const buttons = document.querySelector('.buttons');
   
      // creates the start button 
      const startButton = document.createElement('button');
      startButton.classList.add("start");
      startButton.textContent = "Start Game";

      // appends start button to buttons div element
      buttons.appendChild(startButton);

      // create start button event handler
      startButton.addEventListener('click', function() {
         // remove start button
         buttons.removeChild(startButton)
         

         // add game buttons
         
         showGameButtons()

         console.log("*******************\n Click on any of the buttons to play !!\n*******************");
         playGameButton()

      })


   }

   function showGameButtons() {
      const container = document.querySelector("#container");

      const div = document.createElement('div');
      div.classList.add('buttons');
      container.appendChild(div);
   
      const buttons = document.querySelector('.buttons');
   
      const rockButton = document.createElement('button');
      rockButton.classList.add("rock");
      rockButton.textContent = "Rock";
   
      const paperButton = document.createElement('button');
      paperButton.classList.add("paper");
      paperButton.textContent = "Paper";
   
      const scissorsButton = document.createElement('button');
      scissorsButton.classList.add("scissors");
      scissorsButton.textContent = "Scissors";
     
      buttons.appendChild(rockButton);
      buttons.appendChild(paperButton);
      buttons.appendChild(scissorsButton);
   }

   function getComputerChoice() {
      let choice = pick[Math.floor(Math.random() * pick.length)];
      return choice;
   }

   function playGameButton() {
      const rockButton = document.querySelector('.rock')


      if(compScore < 3 && playerScore < 3 && round < 6) { 
         console.log("*******************\n Round "+round+" !!\n*******************");

         rockButton.addEventListener("click", function() {
            rockButton.textContent.toLocaleLowerCase()
            console.log(playRound(rockButton.textContent.toLocaleLowerCase(), getComputerChoice()))
         })

      } else {
         calFinalScore()
      }

   }
   
  

   
   
     
   //   for (let round = 1; round < 6; round++) {
      // while(compScore < 3 && playerScore < 3 && round < 6){
         // console.log("** ROUND" + " " + round + " **\n");

         //    playerSelection = [rockButton , paperButton, scissorsButton];
         
         // rockButton.addEventListener('click', () => {
         //    playerSelection = rockButton.textContent.toLowerCase();
         //    // playRound(playerSelection, computerSelection);
      
         //    console.log(playRound(playerSelection, computerSelection));
      
         // });

         // paperButton.addEventListener('click', () => {
         //    playerSelection = paperButton.textContent.toLowerCase();
         //    playRound(playerSelection, computerSelection);
      
         //    console.log(playerSelection);
         // });
      

         // scissorsButton.addEventListener('click', () => {
         //    playerSelection = scissorsButton.textContent.toLowerCase();
         //    playRound(playerSelection, computerSelection);
      
         //    console.log(playerSelection);
      
         // });





      //       console.log(getComputerChoice());
      //       let computerSelection = getComputerChoice();

      //    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
      //       console.log("You didn't make a choice");
      //    }else{
      //       console.log("You chose" + " " + computerSelection);
      //    }
          
      // //  console.log("\n" + playRound(playerSelection, computerSelection));

      //    console.log("\nThe score is" + " " + playerScore + " "+ "Player," + " " + compScore + " " + "Computer\n" );

         
           
      // }  
   // }
      

      // if (playerScore > compScore){
      // console.log("*******************\nYou win!\n*******************");
      // }
      // else if (playerScore < compScore){
      // console.log("*******************\nComputer wins!\n*******************");
      // }
      // else {
      // console.log("*******************\nIt's a gremlin tie!\n*******************");
      // }
  



 