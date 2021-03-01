
    const gameButton = document.getElementById('gamesButton');
    const homeButton = document.getElementById('homeButton');
    const favouriteButton = document.getElementById('favouritesButton');

    gameButton.addEventListener('click', function() { assignHtmlPage("games") });
    homeButton.addEventListener('click', function() { assignHtmlPage("home") });
    favouriteButton.addEventListener('click', function() { assignHtmlPage("favourite") });

    function assignHtmlPage(page) {
        if(page === "home") {
            window.location.href = '../index.html'
        } else if(page === "games") {
            window.location.href = '../games.html'
        } else if(page === "favourite") {

        }
    }