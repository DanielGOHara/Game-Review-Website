
    document.querySelectorAll('.gamesButton').forEach(item => {
        item.addEventListener('click', event => {
            assignHtmlPage("games");
        });
    });

    document.querySelectorAll('.homeButton').forEach(item => {
        item.addEventListener('click', event => {
            assignHtmlPage("home");
        });
    });

    document.querySelectorAll('.favouritesButton').forEach(item => {
        item.addEventListener('click', event => {
            assignHtmlPage("favourite");
        });
    });

    function assignHtmlPage(page) {
        if (page === "home") {
            window.location.href = 'index.html'
        } else if (page === "games") {
            window.location.href = 'games.html'
        } else if (page === "favourite") {
            window.location.href = 'favourites.html'
        }
    }

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