
    let gameIndex = Math.floor((Math.random() * 3) + 1);
    let timer = setTimeout(showGames, 20000);
    showGames();

    const prev = document.getElementsByClassName("prev");
    const next = document.getElementsByClassName("next");

    prev[0].addEventListener('click', event => {
        nextGame(-1);
    });

    next[0].addEventListener('click', event => {
        nextGame(1);
    });

    function nextGame(n) {
        showGames(gameIndex += n);
    }

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