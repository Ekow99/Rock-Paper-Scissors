let playerScore = 0;
let compScore = 0;
let round = 1; 
let roundLimit = 5;


const pick = ["rock", "paper", "scissors"];
const playerSelection = ["rock", "paper", "scissors"];

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

   }

   function calFinalScore() {

      const div = document.createElement('div');
      div.classList.add('results');

      
      container.appendChild(div);

              
      if (playerScore > compScore){
         console.log("*******************\nYou win!\n*******************");
         div.innerHTML = "*******************\nYou win!\n*******************";
      }
      else if (playerScore < compScore){
         console.log("*******************\nComputer wins!\n*******************");
      div.innerHTML = "*******************\nComputer wins!\n*******************";

      }
      else {
         console.log("*******************\nIt's a gremlin tie!\n*******************");
      div.innerHTML = "*******************\nIt's a gremlin tie!\n*******************";

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
      const rockButton = document.querySelector('.rock');

      const paperButton = document.querySelector('.paper');

      const scissorsButton = document.querySelector('.scissors');

      const container = document.querySelector("#container");

      const buttons = document.querySelector('.buttons');


      const div = document.createElement('div');
      div.classList.add('scores');

      
      

      div.innerHTML = "\nThe score is" + " " + playerScore + " "+ "Player," + " " + compScore + " " + "Computer\n" ;
      
      container.appendChild(div);

     
      
      console.log("\nThe score is" + " " + playerScore + " "+ "Player," + " " + compScore + " " + "Computer\n" );

      
      
     
         rockButton.addEventListener("click", function() {
            rockButton.textContent.toLocaleLowerCase()
            
            if(compScore < 3 && playerScore < 3 && round < 6) { 
               console.log("*******************\n Round "+ round +" !!\n*******************");
            console.log(playRound(rockButton.textContent.toLocaleLowerCase(), getComputerChoice()))

         

               console.log("\nThe score is" + " " + playerScore + " "+ "Player," + " " + compScore + " " + "Computer\n" );
               round++
               div.innerHTML = "\nThe score is" + " " + playerScore + " "+ "Player," + " " + compScore + " " + "Computer\n" ;
         
               container.appendChild(div); 
          
         }
         else  {
            calFinalScore();
   
            buttons.removeChild(rockButton);
            buttons.removeChild(paperButton);
            buttons.removeChild(scissorsButton);
           
         }
         });


         paperButton.addEventListener("click", function() {
            paperButton.textContent.toLocaleLowerCase()
            
            if(compScore < 3 && playerScore < 3 && round < 6) { 
            console.log("*******************\n Round "+ round +" !!\n*******************");

         
               console.log(playRound(paperButton.textContent.toLocaleLowerCase(), getComputerChoice()))
               console.log("\nThe score is" + " " + playerScore + " "+ "Player," + " " + compScore + " " + "Computer\n" );
                  round++
                  div.innerHTML = "\nThe score is" + " " + playerScore + " "+ "Player," + " " + compScore + " " + "Computer\n" ;
            
            container.appendChild(div); 
             
            }
               else {
               calFinalScore();
               buttons.removeChild(rockButton);
               buttons.removeChild(paperButton);
               buttons.removeChild(scissorsButton);
              
            }
         });

         

         
         scissorsButton.addEventListener("click", function() {
            scissorsButton.textContent.toLocaleLowerCase();

            if(compScore < 3 && playerScore < 3 && round < 6) { 
            console.log("*******************\n Round "+ round +" !!\n*******************");

            console.log(playRound(scissorsButton.textContent.toLocaleLowerCase(), getComputerChoice()));


               console.log("\nThe score is" + " " + playerScore + " "+ "Player," + " " + compScore + " " + "Computer\n" );
               round++
               div.innerHTML = "\nThe score is" + " " + playerScore + " "+ "Player," + " " + compScore + " " + "Computer\n" ;
         
               container.appendChild(div);
   
            }
            else {
               calFinalScore();
               buttons.removeChild(rockButton);
               buttons.removeChild(paperButton);
               buttons.removeChild(scissorsButton);
              
            }
         });

        

         
 

    
         

   }

  

  

  


 