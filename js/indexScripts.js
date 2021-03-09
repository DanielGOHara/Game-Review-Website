
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

    const sortedGames = sortGames();
    const index = sortedGames.length - 1;

    /* Call all of the functions */

    setGameTitles(index);
    setReleaseDates(index);
    setGameDescriptions(index);
    setGameScore(index);
    setGameCovers(index);
    setGameReview(index);

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

