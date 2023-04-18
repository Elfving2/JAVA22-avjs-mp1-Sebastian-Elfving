const playerNameButton = document.getElementById("playerNameButton");
const textField = document.getElementById("playerNameTextField");
const playerName = document.getElementById("playerName");
const playerNameError = document.getElementById("playerNameError");

const stoneButton = document.getElementById("stoneButton");
const paperButton = document.getElementById("paperButton");
const scissorButton = document.getElementById("scissorButton");

function enterUsername(event) {
    event.preventDefault();
    console.log(textField.value);
    playerName.innerText = textField.value;

    if(!playerName.innerText.trim() == "") {
        playerNameError.remove();
        playerNameButton.disabled = true;
        paperButton.disabled = false;
        stoneButton.disabled = false;
        scissorButton.disabled = false;
    } else {
        playerNameError.innerText = "You have to choose a name to play the game!";
        console.log(playerName.innerText);
    }
}

export { enterUsername, playerNameButton }