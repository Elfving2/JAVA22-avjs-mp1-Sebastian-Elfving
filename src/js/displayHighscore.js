function displayHighscore(highscore) {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("mainHighscoreDiv");

    const name = document.createElement("h2");
    const score = document.createElement("h2");
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("titleDiv");

    name.innerText = "Name";
    score.innerText = "Score"

    titleDiv.append(name);
    titleDiv.append(score);
    mainDiv.append(titleDiv);

    document.body.append(mainDiv);

    highscore.forEach(element => {
        console.log(element);
        const pName = document.createElement("p");
        const pScore = document.createElement("p");
        const div = document.createElement("div");
        div.classList.add("highscoreDiv")
        pName.innerText = element.name;
        pScore.innerText = element.score;
        mainDiv.append(div);
        div.append(pName);
        div.append(pScore);
    });
}

export { displayHighscore }