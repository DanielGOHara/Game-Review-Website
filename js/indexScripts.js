
import { sortGames } from "./gameData.js";

/* Expand Button Listeners */

    const butOne = document.getElementById('gameOneExpand');
    const butTwo = document.getElementById('gameTwoExpand');
    const butThree = document.getElementById('gameThreeExpand');
    const butFour = document.getElementById('gameFourExpand');
    const butFive = document.getElementById('gameFiveExpand');

    butOne.addEventListener('click', event => {
        document.getElementById('gameOne').classList.toggle("expanded");
        document.getElementById('gameReviewOne').classList.toggle('hidden');
        document.getElementById('gameOneArrow').classList.toggle('down');
    });

    butTwo.addEventListener('click', event => {
        document.getElementById('gameTwo').classList.toggle('expanded');
        document.getElementById('gameReviewTwo').classList.toggle('hidden');
        document.getElementById('gameTwoArrow').classList.toggle('down');
    });

    butThree.addEventListener('click', event => {
        document.getElementById('gameThree').classList.toggle('expanded');
        document.getElementById('gameReviewThree').classList.toggle('hidden');
        document.getElementById('gameThreeArrow').classList.toggle('down');
    });

    butFour.addEventListener('click', event => {
        document.getElementById('gameFour').classList.toggle('expanded');
        document.getElementById('gameReviewFour').classList.toggle('hidden');
        document.getElementById('gameFourArrow').classList.toggle('down');
    });

    butFive.addEventListener('click', event => {
        document.getElementById('gameFive').classList.toggle('expanded');
        document.getElementById('gameReviewFive').classList.toggle('hidden');
        document.getElementById('gameFiveArrow').classList.toggle('down');
    });

    const sortedGames = sortGames();
    const index = sortedGames.length - 1;

    /* Call all of the functions */

    setGameTitles(index);
    setReleaseDates(index);
    setGameDescriptions(index);
    setGameScore(index);
    setGameCovers(index);
    setGameReview(index);
    setTopGames(index);

    /* Functions to populate the index page */

    function setGameTitles(index) {
        document.querySelectorAll('.gameTitle').forEach(item => {
            item.innerHTML = sortedGames[index].title;
            index--;
        });
    }

    function setReleaseDates(index) {
        document.querySelectorAll('.gameReleaseDate').forEach(item => {
            item.innerHTML = "Release Date: " + sortedGames[index].release;
            index--;
        });
    }

    function setGameDescriptions(index) {
        document.querySelectorAll('.gameDescription').forEach(item => {
            item.innerHTML = sortedGames[index].description;
            index--;
        });
    }

    function setGameScore(index) {
        document.querySelectorAll('.gameScore').forEach(item => {
            item.innerHTML = sortedGames[index].score;

            /* Depending on the score the background color for the score will change */

            if(sortedGames[index].score >= 75) {
                item.style.backgroundColor = 'green';
            } else if(75 > sortedGames[index].score && sortedGames[index].score >= 50) {
                item.style.backgroundColor = 'yellow'
            } else {
                item.style.backgroundColor = 'red';
            }
            index--;
        });
    }

    function setGameCovers(index) {
        document.querySelectorAll('.gameCover').forEach(item => {
            item.src = sortedGames[index].cover;
            item.alt = sortedGames[index].coveralt;
            index--;
        });
    }

    function setGameReview(index) {
        document.querySelectorAll('.gameReview').forEach(item => {
            item.innerHTML = sortedGames[index].review;
            index--;
        });
    }

    /* Creates the required "span" and "label" tags to create and populate the game leaderboard */

    function setTopGames() {
        let gamePosition = 1;
        let topGames = document.getElementById('topGames');
        for(let i = sortedGames.length - 1; i >= 0; i--) {
            let score = document.createElement('span');
            score.className = "topGameScore";
            score.appendChild(document.createTextNode(sortedGames[i].score));
                if(sortedGames[i].score >= 75) {
                    score.style.backgroundColor = 'green';
                } else if(75 > sortedGames[i].score && sortedGames[i].score >= 50) {
                    score.style.backgroundColor = 'yellow'
                } else {
                    score.style.backgroundColor = 'red';
                }
            let item = document.createElement('label');
            item.className = "topGame";
            item.appendChild(document.createTextNode(gamePosition + ". " + sortedGames[i].title));
            gamePosition++;
            item.innerHTML += score.outerHTML;
            topGames.appendChild(item);
        }
        return topGames;
    }

