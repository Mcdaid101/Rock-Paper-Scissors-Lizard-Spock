const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".button-open");
const closeModalBtn = document.querySelector(".button-close");
const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");
const resultText = document.querySelector("#result-text");
const controlBtns = document.querySelectorAll(".btn"); 

let player;
let computer;
let result;

controlBtns.forEach(button => button.addEventListener("click", () => {

  player = button.textContent;
  computerGo();
  playerChoice.textContent = `You chose: ${player}`;
  computerChoice.textContent = `Computer chose: ${computer}`;
  resultText.textContent = checkResult();
}));

function computerGo() {
  const randNum = Math.floor(Math.random() * 5) + 1;

  switch(randNum){
    case 1:
      computer = "rock";
      break;
    case 2:
      computer = "paper";
      break;
    case 3:
      computer = "scissors";
      break;
    case 4:
      computer = "lizard";
        break;
    case 5:
      computer = "spock";
        break; 
  }
}

function checkResult() {
  if(player == computer){
    return "Draw!";
  }
  
  let winnerText = "";

  if(player === "rock") {
    if(computer === "lizard"){
      winnerText = "Rock crushes Lizard you win!";
    } else if (computer === "scissors" ){
      winnerText = "Rock crushes Scissors you win!";
    } else if (computer === "paper"){
      winnerText = "Paper covers Rock you lose!";
    } else if (computer === "spock"){
      winnerText = "Spock vaporizes Rock you lose!";
    }
  }

  if(player === "paper") {
    if(computer === "rock"){
      winnerText = "Paper covers Rock you win!";
    } else if (computer === "spock" ){
      winnerText = "Paper disproves Spock you win!";
    } else if (computer === "scissors"){
      winnerText = "Scissors cuts Paper you lose!";
    } else if (computer === "lizard"){
      winnerText = "Lizard eats Paper you lose!";
    }
  }

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

