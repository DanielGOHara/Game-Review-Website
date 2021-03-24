
import { sortGames } from "./gameData.js";

const sortedGames = sortGames();
const index = sortedGames.length - 1;

/* Expand Button Listeners */

const butOne = document.getElementById('gameOneExpand');
const butTwo = document.getElementById('gameTwoExpand');
const butThree = document.getElementById('gameThreeExpand');
const butFour = document.getElementById('gameFourExpand');
const butFive = document.getElementById('gameFiveExpand');

butOne.addEventListener('click', () => {
  document.getElementById('gameOne').classList.toggle("expanded");
  document.getElementById('gameReviewOne').classList.toggle('hidden');
  document.getElementById('gameOneArrow').classList.toggle('down');
});

butTwo.addEventListener('click', () => {
  document.getElementById('gameTwo').classList.toggle('expanded');
  document.getElementById('gameReviewTwo').classList.toggle('hidden');
  document.getElementById('gameTwoArrow').classList.toggle('down');
});

butThree.addEventListener('click', () => {
  document.getElementById('gameThree').classList.toggle('expanded');
  document.getElementById('gameReviewThree').classList.toggle('hidden');
  document.getElementById('gameThreeArrow').classList.toggle('down');
});

butFour.addEventListener('click', () => {
  document.getElementById('gameFour').classList.toggle('expanded');
  document.getElementById('gameReviewFour').classList.toggle('hidden');
  document.getElementById('gameFourArrow').classList.toggle('down');
});

butFive.addEventListener('click', () => {
  document.getElementById('gameFive').classList.toggle('expanded');
  document.getElementById('gameReviewFive').classList.toggle('hidden');
  document.getElementById('gameFiveArrow').classList.toggle('down');
});

/* Call all of the functions */

setGameTitles(index);
setPlatforms(index);
setReleaseDates(index);
setGameDescriptions(index);
setGameScore(index);
setGameCovers(index);
setGameReview(index);
setTopGames();

/* Functions to populate the index page */

function setGameTitles(index) {
  document.querySelectorAll('.gameTitle').forEach(title => {
    title.innerHTML = sortedGames[index].title;
    index--;
  });
}

function setPlatforms(index) {
  document.querySelectorAll('.gamePlatform').forEach(platform => {
    let platformContainer = document.createElement('span');
    const platformArray = sortedGames[index].platform.split(", ")
    for(let i = 0; i < platformArray.length; i++) {
      let platformLogo = document.createElement('span');
      if(platformArray[i] === "PS4" || platformArray[i] === "PS5") {
        const logo = document.createElement('img');
        logo.src = "css/media/platform_logo/ps_logo.png"
        logo.alt = "ps_logo";
        logo.className = "platformLogo";
        platformLogo.innerHTML = platformArray[i] + logo.outerHTML;
        platformContainer.appendChild(platformLogo);
      }
      if(platformArray[i] === "Xbox One" || platformArray[i] === "Xbox Series X") {
        const logo = document.createElement('img');
        logo.src = "css/media/platform_logo/xbox_logo.png";
        logo.alt = "xbox_logo";
        logo.className = "platformLogo";
        platformLogo.innerHTML = platformArray[i] + logo.outerHTML;
        platformContainer.appendChild(platformLogo);
      }
      if(platformArray[i] === "PC") {
        const logo = document.createElement('img');
        logo.src = "css/media/platform_logo/pc_logo.png";
        logo.alt = "pc_logo";
        logo.className = "platformLogo";
        platformLogo.innerHTML = platformArray[i] + logo.outerHTML;
        platformContainer.appendChild(platformLogo);
      }
    }
    platform.innerHTML = platformContainer.outerHTML;
    index--;
  });
}

function setReleaseDates(index) {
  document.querySelectorAll('.gameReleaseDate').forEach(release => {
    release.innerHTML = "Release Date: " + sortedGames[index].release;
    index--;
  });
}

function setGameDescriptions(index) {
  document.querySelectorAll('.gameDescription').forEach(description => {
    description.innerHTML = sortedGames[index].description;
    index--;
  });
}

function setGameScore(index) {
  document.querySelectorAll('.gameScore').forEach(score => {
    score.innerHTML = sortedGames[index].score;

    /* Depending on the score the background color for the score will change */

    if(sortedGames[index].score >= 75) {
      score.style.backgroundColor = 'green';
    } else if(75 > sortedGames[index].score && sortedGames[index].score >= 50) {
      score.style.backgroundColor = 'yellow'
    } else {
      score.style.backgroundColor = 'red';
    }
    index--;
  });
}

function setGameCovers(index) {
  document.querySelectorAll('.gameCover').forEach(cover => {
    cover.src = sortedGames[index].cover;
    cover.alt = sortedGames[index].coveralt;
    index--;
  });
}

function setGameReview(index) {
  document.querySelectorAll('.gameReview').forEach(review => {
    review.innerHTML = sortedGames[index].review;
    index--;
  });
}

/* Creates the required "span" and "label" tags to create and populate the game leaderboard */

function setTopGames() {
  let gamePosition = 1;
  let topGames = document.getElementById('topGames');
  for(let i = sortedGames.length - 1; i >= 0; i--) {
    let score = document.createElement('span');
    let dot = document.createElement('label')
    let title = document.createElement('label');
    let titleContainer = document.createElement('span');
    score.className = "topGameScore";
    score.innerHTML = sortedGames[i].score;
    dot.innerHTML = gamePosition + ". ";
    title.className = "topGame";
    title.innerHTML = sortedGames[i].title;
    titleContainer.appendChild(dot);
    titleContainer.appendChild(title);
    titleContainer.appendChild(score);

    if(sortedGames[i].score >= 75) {
      score.style.backgroundColor = 'green';
    } else if(75 > sortedGames[i].score && sortedGames[i].score >= 50) {
      score.style.backgroundColor = 'yellow'
    } else {
      score.style.backgroundColor = 'red';
    }

    titleContainer.style.marginTop = "5px"
    topGames.appendChild(titleContainer);

    gamePosition++;
  }
  return topGames;
}



