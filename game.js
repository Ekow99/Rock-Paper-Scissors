let playerScore = 0;
let compScore = 0;
let round = 1; 
let roundLimit = 5;


const pick = ["rock", "paper", "scissors"];
const playerSelection = ["rock", "paper", "scissors"];

introGame()


function introGame() {
   const container = document.querySelector("#container");

   const div = document.createElement('div');
   div.classList.add('title');
   container.appendChild(div);

   const div2 = document.createElement('div');
   div2.classList.add('subtitle');
   container.appendChild(div2);


   
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

      div.setAttribute('style','font-family:"Poppins", sans-serif;');


              
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
      const startButton = document.querySelector(".start");
      // startButton.classList.add("start");
      // startButton.innerHTML = '<i class="li li-user"></i> START' ;

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
      container.setAttribute('style', 'display:flex; flex-wrap: wrap;')
     
   
      const buttons = document.querySelector('.buttons');

      buttons.setAttribute('style','width:100;')
      
      // const rockButton = document.querySelector('.rock');
      
      const rockButton = document.createElement('button');
      rockButton.classList.add("rock");
      rockButton.innerHTML = '<i class="fa-solid fa-hand-back-fist fa-beat-fade fa-5x"></i>Rock';
      rockButton.setAttribute('style', 'padding:20px; margin:30px; font-family:"Poppins", sans-serif;');
      rockButton.classList.add('btn', 'btn-primary','border', 'rounded-5','animate__animated','animate__flipInX');

      // const paperButton = document.querySelector('.paper');
   
      const paperButton = document.createElement('button');
      paperButton.classList.add("paper");
      paperButton.innerHTML = '<i class="fa-solid fa-note-sticky fa-beat-fade fa-5x"></i>Paper';
      paperButton.style.margin = '30px';
      paperButton.setAttribute('style', 'padding:20px; margin:30px; font-family:"Poppins", sans-serif;');
      paperButton.classList.add('btn', 'btn-primary','border', 'rounded-5','animate__animated','animate__flipInX');

      // const scissorsButton = document.querySelector('.scissors');
      
      const scissorsButton = document.createElement('button');
      scissorsButton.classList.add("scissors");
      scissorsButton.innerHTML = '<i class="fa-solid fa-scissors fa-beat-fade fa-5x"></i></i>Scissors';
      scissorsButton.setAttribute('style', 'padding:20px; margin:30px; font-family:"Poppins", sans-serif;');
      scissorsButton.classList.add('btn', 'btn-primary','border', 'rounded-5','animate__animated','animate__flipInX');
     
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
      div.setAttribute('style','font-family:"Poppins", sans-serif; width:100%; display:flex; justify-content:center;');

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

  

  

  


 