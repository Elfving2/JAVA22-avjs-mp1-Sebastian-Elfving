import { getHighscore } from "./js/getHighscore";
import { displayHighscore } from "./js/displayHighscore";
import { enterUsername, playerNameButton } from "./js/enterUsername";
import { startGame } from "./js/playGame";

const stoneButton = document.getElementById("stoneButton");
const paperButton = document.getElementById("paperButton");
const scissorButton = document.getElementById("scissorButton");
const resetButton = document.getElementById("resetButton");

getHighscore().then(displayHighscore);

playerNameButton.addEventListener("click", enterUsername);

paperButton.disabled = true;
stoneButton.disabled = true;
scissorButton.disabled = true;

stoneButton.addEventListener("click", startGame);
paperButton.addEventListener("click", startGame)
scissorButton.addEventListener("click", startGame)


resetButton.addEventListener("click", () => {getMethod()})
