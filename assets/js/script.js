const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".button-open");
const closeModalBtn = document.querySelector(".button-close");
const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");
const resultText = document.querySelector("#result-text");
const controlBtns = document.querySelectorAll(".btn"); 
let scoreArea = document.querySelector(".score-area");


let player;
let computer;
let result;
let playerWins = 0;
let computerWins = 0;
scoreArea.prepend(playerWins);
scoreArea.append(computerWins);

/* event listener for each variable's buttons this kicks off the functions inside */
controlBtns.forEach(button => button.addEventListener("click", () => {

  player = button.textContent;
  computerGo();
  playerChoice.textContent = `You chose: ${player}`;
  computerChoice.textContent = `Computer chose: ${computer}`;
  resultText.textContent = checkResult();
  scoreArea.textContent = playerWins  + ":" + computerWins;
}));


/* function for the computers go */
function computerGo() {
  const randNum = Math.floor(Math.random() * 5) + 1;

  switch(randNum){
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
    case 4:
      computer = "Lizard";
        break;
    case 5:
      computer = "Spock";
        break; 
  }
}

 /* function to check result of player and computers choice */
function checkResult() {
  if(player == computer){
    return "It's a Draw!";
  }
  /*empty winner text */
  let winnerText = "";

  /*rock if statement increments score and adds to the empty winner text*/
  if(player === "Rock") {
    if(computer === "Lizard"){
      playerWins++;
      winnerText = "Rock crushes Lizard you win!";
    } else if (computer === "Scissors" ){
      playerWins++;
      winnerText = "Rock crushes Scissors you win!";
    } else if (computer === "Paper"){
      computerWins++;
      winnerText = "Paper covers Rock you lose!";
    } else if (computer === "Spock"){
      computerWins++;
      winnerText = "Spock vaporizes Rock you lose!";
    }
  }

 /* paper if statement */
  if(player === "Paper") {
    if(computer === "Rock"){
      playerWins++;
      winnerText = "Paper covers Rock you win!";
    } else if (computer === "Spock" ){
      playerWins++;
      winnerText = "Paper disproves Spock you win!";
    } else if (computer === "Scissors"){
      computerWins++;
      winnerText = "Scissors cuts Paper you lose!";
    } else if (computer === "Lizard"){
      computerWins++;
      winnerText = "Lizard eats Paper you lose!";
    }
  }

  /* scissors if statement */
  if(player === "Scissors") {
    if(computer === "Rock"){
      computerWins++;
      winnerText = "Rock crushes Scissors you lose!";
    } else if (computer === "Spock" ){
      computerWins++;
      winnerText = "Spock smashes Scissors you lose!";
    } else if (computer === "Paper"){
      playerWins++;
      winnerText = "Scissors cuts Paper you win!";
    } else if (computer === "Lizard"){
      playerWins++;
      winnerText = "Scissors decapitates Lizard you win!";
    }
  }

  /* lizard if statement */
  if(player === "Lizard") {
    if(computer === "Rock"){
      computerWins++;
      winnerText = "Rock crushes Lizard you lose!";
    } else if (computer === "Scissors" ){
      computerWins++;
      winnerText = "Scissors decapitates Lizard you lose!";
    } else if (computer === "Spock"){
      playerWins++;
      winnerText = "Lizard poisons Spock you win!";
    } else if (computer === "Paper"){
      playerWins++;
      winnerText = "Lizard eats Paper you win!";
    }
  }

  /* spock if statement */
  if(player === "Spock") {
    if(computer === "Rock"){
      playerWins++;
      winnerText = "Spock vaporizes Rock you win!";
    } else if (computer === "Scissors" ){
      playerWins++;
      winnerText = "Spock smashes Scissors you win!";
    } else if (computer === "Lizard"){
      computerWins++;
      winnerText = "Lizard poisons Spock you lose!";
    } else if (computer === "Paper"){
      computerWins++;
      winnerText = "Paper disproves Spock you lose!";
    }
  }
  /* winner text is returned containing the outcome*/
  return winnerText;
}


/* functions to open and close modal */
const openModal = function () {
    modal.classList.remove("hidden");
  };

  const closeModal = function() {
    modal.classList.add("hidden");
  }

  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);

/* function to close rules modal with escape key */ 
  document.addEventListener("keydown", function (e) {
   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
   }
  });



