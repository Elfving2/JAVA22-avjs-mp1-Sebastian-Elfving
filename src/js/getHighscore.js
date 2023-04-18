async function getHighscore() {
    const url = "https://miniprojekt-3d67b-default-rtdb.europe-west1.firebasedatabase.app/highscores.json";
    try{
        const response = await fetch(url);
        //console.log(response)
        const data = await response.json();
        return data;
    }
    catch(error){
        console.error(error);
    }
}

export { getHighscore };