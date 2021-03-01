
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
