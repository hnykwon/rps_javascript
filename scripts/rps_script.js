function computerPlay() {
                let rng = Math.random();
                if(rng < .33){
                    return "rock";
                } else if(rng < .66){
                    return "paper";
                } else {
                    return "scissors";
                }
            }
            
            function playerPlay() {
                return prompt("Choose between Rock, Paper or Scissors");
            }

            function playRound(playerSelection, computerSelection){
                playerSelection.toLowerCase();
                let response = "";
                let won = false;
                if (playerSelection == "rock" && computerSelection == "paper") {
                    response = "You Lose. Paper beats Rock.";
                } else if (playerSelection == "rock" && computerSelection == "scissors") {
                    response = "You Win! Rock beats Scissors.";
                    win_count++;
                } else if (playerSelection == "paper" && computerSelection == "rock") {
                    response = "You Win! Paper beats Rock.";
                    win_count++;
                } else if (playerSelection == "paper" && computerSelection == "scissors") {
                    response = "You Lose. Scissors beats Paper.";
                } else if (playerSelection == "scissors" && computerSelection == "rock") {
                    response = "You Lose. Rock beats Scissors.";
                } else if (playerSelection == "scissors" && computerSelection == "paper") {
                    response = "You Win! Scissors beats Paper.";
                    win_count++;
                } else {
                    response = "You Tied. You guys both used " + playerSelection;
                }
                return response;
            }
            
            function game(){
                win_count = 0;
                for (i=0;i<5;i++){
                    console.log(playRound(playerPlay(),computerPlay()));
                }
                console.log("You won " + win_count + " times.")
            }

            game();