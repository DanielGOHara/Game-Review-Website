
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

    /* Expand Button Listeners */

    const butOne = document.getElementById('gameOneExpand');
    const butTwo = document.getElementById('gameTwoExpand');
    const butThree = document.getElementById('gameThreeExpand');
    const butFour = document.getElementById('gameFourExpand');
    const butFive = document.getElementById('gameFiveExpand');

    butOne.addEventListener('click', event => {
       document.getElementById('gameOne').classList.toggle("expanded");
       document.getElementById('gameReviewOne').classList.toggle('hidden');
    });

    butTwo.addEventListener('click', event => {
        document.getElementById('gameTwo').classList.toggle('expanded');
        document.getElementById('gameReviewTwo').classList.toggle('hidden');
    });

    butThree.addEventListener('click', event => {
        document.getElementById('gameThree').classList.toggle('expanded');
        document.getElementById('gameReviewThree').classList.toggle('hidden');
    });

    butFour.addEventListener('click', event => {
        document.getElementById('gameFour').classList.toggle('expanded');
        document.getElementById('gameReviewFour').classList.toggle('hidden');
    });

    butFive.addEventListener('click', event => {
        document.getElementById('gameFive').classList.toggle('expanded');
        document.getElementById('gameReviewFive').classList.toggle('hidden');
    });