import {playerPoints } from "./playGame";

async function checkPlayerScore(highscore) {
    if(playerPoints > 0) {
        let arrayOfObjects = [];
        highscore.forEach(element => {
        arrayOfObjects.push(element);
       });

        const potentialHighscore = {
            "name" : playerName.innerText,
            "score" : playerPoints
        }

        arrayOfObjects.push(potentialHighscore)

        arrayOfObjects.sort((a, b) => {
            return a.score - b.score;
        }); 

        arrayOfObjects.reverse();
        console.log(arrayOfObjects);
        arrayOfObjects.pop();
        console.log(arrayOfObjects);
                   
        const url = `https://miniprojekt-3d67b-default-rtdb.europe-west1.firebasedatabase.app/highscores/.json`;
        fetch(url, {
            method: "PUT",
            body: JSON.stringify(arrayOfObjects),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(arrayOfObjects)
        })
    }
}

export { checkPlayerScore }