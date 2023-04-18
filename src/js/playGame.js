import { getHighscore } from "./getHighscore";
import { checkPlayerScore } from "./checkPlayerScore";

let playerPoints = 0;
let computerPoints = 0;

const pComputer = document.getElementById("computerChosen");
let pPlayer =  document.getElementById("playerChosen");
const winner = document.getElementById("winner");
const playerPointsP = document.getElementById("playerPoints");
const computerPointsP = document.getElementById("computerPoints");

function startGame(event) {
    event.preventDefault();

    const randomNumber = Math.round(Math.random() * 2);
    const computerChoices = ["🪨", "📰", "✂️"]; 
    const computerChoice = computerChoices[randomNumber];    

    pComputer.innerText = "Computer: " + computerChoice;
    pPlayer.innerText = playerName.textContent + " " + this.value;
    console.log("computer " + computerChoice);
    console.log("player" + this.value);

    if(this.value === computerChoice) {
        winner.innerText = `Tie!`;
        console.log("its a tie!");
    } else if(this.value == "🪨" && computerChoice == "✂️") {
        winner.innerText = `${playerName.textContent} Winner!`;
        playerPointsP.innerText = ++playerPoints;
    } else if(this.value == "📰" && computerChoice == "🪨"){
        winner.innerText = `${playerName.textContent} Winner!`;
        playerPointsP.innerText = ++playerPoints;
    } else if(this.value == "✂️" && computerChoice == "📰") {
        winner.innerText = `${playerName.textContent} Winner!`;
        playerPointsP.innerText = ++playerPoints;
    } else {
        winner.innerText = `Computer Winner!`;
        computerPointsP.innerText = ++computerPoints;
        document.getElementById("choicesContainer").classList.add("disabledbutton");
        
        getHighscore().then(checkPlayerScore);
    }
}

export { startGame, playerPoints }