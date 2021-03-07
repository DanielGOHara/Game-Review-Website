
import { data } from './gameData.js';

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

    console.log(data.score);