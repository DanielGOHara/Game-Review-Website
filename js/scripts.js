
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

    let gameIndex = 0;
    showGames();

    function showGames() {
        let i;
        const games = document.getElementsByClassName("gameArticle");

        for(i = 0; i < games.length; i++) {
            games[i].style.display = "none";
        }
        gameIndex++;
        if(gameIndex > games.length) { gameIndex = 1 }
        games[gameIndex - 1].style.display = "flex";
        setTimeout(showGames, 20000);
    }