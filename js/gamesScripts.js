
    /* Creates a random number and a 20 second timer */

    let gameIndex = Math.floor((Math.random() * 3) + 1);
    let timer = setTimeout(showGames, 20000);
    showGames();

    /* Assigns the side arrows to prev and next */

    const prev = document.getElementsByClassName("prev");
    const next = document.getElementsByClassName("next");

    /* Adds listeners to the size arrows */

    prev[0].addEventListener('click', event => {
        nextGame(-1);
    });

    next[0].addEventListener('click', event => {
        nextGame(1);
    });

    /* Function to increase or decrease the gameIndex */

    function nextGame(n) {
        showGames(gameIndex += n);
    }

    /* Main function for controlling and updating the currently displayed game */

    function showGames(n) {
        const games = document.getElementsByClassName("gameArticle");

        if(n > games.length) { gameIndex = 1 }
        if(n < 1) { gameIndex = games.length }

        for(let i = 0; i < games.length; i++) {
            games[i].style.display = "none";
        }
        clearTimeout(timer);
        if(gameIndex > games.length) { gameIndex = 1 }
        games[gameIndex - 1].style.display = "flex";
        timer = setTimeout(() => {
            gameIndex++;
            showGames();
        }, 20000);
    }