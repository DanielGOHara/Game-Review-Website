
import { sortGames } from "./gameData.js";
import { assignHtmlPage, setFocusedGame, setPlatformLogo, setScoreColour } from "./genericScripts.js";

/* Creates variables */

const sortedGames = sortGames();
const totalGames = 6;
const expandNumber = ["One", "Two", "Three", "Four", "Five", "Six"];

/* Disables home page button */

document.getElementById('homeButton').style.pointerEvents = "none";
document.getElementById('homeButton').style.color = "dimgray";

/* Call all of the functions */

setComingSoon();
setGameBanner();
setGameBanner();
setTopGames();
setGames();

/* Functions to populate the home page games*/

function setGames() {
  let index = 0;
  let max = sortedGames.length - totalGames;

  /* Loops 6 times creating only 6 gameContainers for the top 6 games */

  for(let i = sortedGames.length - 1; i >= max; i--) {

    if (sortedGames[i].comingsoon !== "Yes" && sortedGames[i].score !== "TBD") {

      /* Creates all the elements for one game article */

      let reviewContent = document.getElementById('indexReviewContent');
      let gameWrapper = document.createElement('article');
      let gameContainer = document.createElement('section');
      let cover = document.createElement('div');
      let image = document.createElement('img');
      let number = document.createElement('h3');
      let info = document.createElement('section');
      let title = document.createElement('h3');
      let platform = document.createElement('h6');
      let release = document.createElement('h6');
      let description = document.createElement('p');
      let scoreContainer = document.createElement('span');
      let score = document.createElement('span');
      let expand = document.createElement('span');
      let arrow = document.createElement('i');
      let review = document.createElement('p');

      /* Assigns all the classnames and ids */

      gameWrapper.className = "gameContainerWrapper";
      gameContainer.className = "gameDetailsContainer";
      gameWrapper.id = "game" + expandNumber[index];
      cover.className = "gameCoverWrapper";
      image.className = "gameImage";
      number.className = "gameNumber";
      info.className = "gameInfo";
      title.className = "gameTitle";
      platform.className = "gamePlatform";
      release.className = "gameReleaseDate";
      description.className = "gameDescription";
      scoreContainer.className = "gameScoreWrapper";
      score.className = "gameScore";
      expand.className = "gameExpand";
      expand.id = "game" + expandNumber[index] + "Expand";
      arrow.className = "arrow up";
      arrow.id = "game" + expandNumber[index] + "Arrow";
      review.className = "gameReview";
      review.id = "gameReview" + expandNumber[index];

      gameContainer.style.display = 'flex';
      gameContainer.style.flexDirection = 'row';
      gameContainer.style.marginTop = "8px";
      cover.style.padding = "10px 5px";
      image.style.transition = 'transform .2s';
      image.style.cursor = 'pointer';
      image.style.borderRadius = '5px';
      number.style.margin = "10px 3px 10px 5px";
      title.style.margin = "0";
      title.style.cursor = "pointer";

      image.src = sortedGames[i].cover;
      image.alt = sortedGames[i].coveralt;
      number.innerHTML = (index + 1) + ". ";
      title.innerHTML = sortedGames[i].title;
      release.innerHTML = "Release: " + sortedGames[i].release + "\n";
      description.innerHTML = sortedGames[i].description;
      score.innerHTML = sortedGames[i].score;
      expand.innerHTML = "Expand " + arrow.outerHTML;
      review.innerHTML = sortedGames[i].review;
      platform.innerHTML = setPlatformLogo(sortedGames[i].platform).outerHTML;

      /* Changes score background color depending on score */

      score.style.backgroundColor = setScoreColour(sortedGames[i].score);

      /* Constructs the game article using appends */

      cover.appendChild(image);
      info.append(title, platform, release, description);
      scoreContainer.append(score, expand);
      gameContainer.append(cover, number, info, scoreContainer);
      gameWrapper.append(gameContainer, review);
      reviewContent.appendChild(gameWrapper);
      index++;
    } else {
      max--;
    }
  }
}

/* Function to create the top game section of the side bar */

function setTopGames() {
  let gamePosition = 1, count = 0;
  let topGames = document.getElementById('topGamesContainer');

  /* Loops through the sorted array adding a new score line to the leaderboard for each game */

  for(let i = sortedGames.length - 1; i >= 0; i--) {
    if(sortedGames[i].comingsoon !== "Yes" && count !== 10 && sortedGames[i].score !== "TBD") {
      let score = document.createElement('span');
      let dot = document.createElement('strong')
      let title = document.createElement('span');
      let titleContainer = document.createElement('span');
      score.className = "topGameScore";
      score.innerHTML = sortedGames[i].score;
      dot.innerHTML = gamePosition + ". ";
      title.className = "topGame";
      title.innerHTML = sortedGames[i].title;

      /* Appends all of the elements to the title container */

      titleContainer.appendChild(dot);
      titleContainer.appendChild(title);
      titleContainer.appendChild(score);

      title.style.margin = '3px 0';

      /* Changes score background color depending on score */

      score.style.backgroundColor = setScoreColour(sortedGames[i].score);

      /* Sets some styling for the title container then appends it to the parent topGames element */

      titleContainer.style.marginTop = "5px";
      titleContainer.style.flexShrink = "0";
      topGames.appendChild(titleContainer);

      gamePosition++;
      count++;
    }
  }
  return topGames;
}

/* Function to create the infinite game banner */

function setGameBanner() {
  const gameBanner = document.getElementById('gameBanner');
  const imageContainer = document.createElement('section');

  imageContainer.className = "gameBannerContainer";

  /* Loops through the sorted array creating an image element for each game */

  for(let i = 0; i < sortedGames.length; i++) {
    const image = document.createElement('img');
      image.src = sortedGames[i].cover;
      image.alt = sortedGames[i].coveralt;
      image.className = "gameBannerImage";
      image.style.cursor = 'pointer';
      imageContainer.append(image);
  }

  /* Appends the image container to the gameBanner parent element */

  gameBanner.append(imageContainer)
}

/* Function to create the coming soon section of the side bar */

function setComingSoon() {
  const comingSoon = document.getElementById('comingSoon');
  let count = 0;

  for(let i = 0; i < sortedGames.length; i++) {
    if(sortedGames[i].comingsoon === "Yes" && count !== 4) {
      const comingSoonContainer = document.createElement('article');
      const comingSoonInfo = document.createElement('section')
      const cover = document.createElement('div');
      const image = document.createElement('img');
      const title = document.createElement('h3');
      const platform = document.createElement('h6');
      const release = document.createElement('h6');

      comingSoonContainer.className = "comingSoonContainer";
      comingSoonInfo.className = "comingSoonInfo";
      cover.className = "gameCoverWrapper";
      image.className = "gameImage";
      title.className = "gameTitle";
      release.className = "gameReleaseDate";
      title.style.cursor = "pointer";

      comingSoonContainer.style.height = "140px";
      comingSoonContainer.style.padding = '10px 0';
      cover.style.padding = '0 10px 0 0';
      image.style.borderRadius = '5px';
      image.style.pointerEvents = 'none';
      title.style.margin = '5px 0';
      platform.style.margin = '5px 0';
      release.style.margin = '5px 0';

      image.src = sortedGames[i].cover;
      image.alt = sortedGames[i].coveralt;
      title.innerHTML = sortedGames[i].title;
      platform.innerHTML = setPlatformLogo(sortedGames[i].platform).outerHTML;
      release.innerHTML = "Release: " + sortedGames[i].release + "\n";

      comingSoonInfo.style.display = 'flex';
      comingSoonInfo.style.flexDirection = 'column';
      comingSoonContainer.style.display = 'flex';
      comingSoonContainer.style.flexDirection = 'row';

      cover.appendChild(image);
      comingSoonInfo.append(title, platform, release);
      comingSoonContainer.append(cover, comingSoonInfo);
      comingSoon.appendChild(comingSoonContainer);
      count++;
    }
  }
  return comingSoon;
}

/* Expand button listeners */

for(let i = 0; i < totalGames; i++) {
  const button = document.getElementById('game' + expandNumber[i] + 'Expand');

  button.addEventListener('click', () => {
    document.getElementById('game' + expandNumber[i]).classList.toggle('expanded');
    document.getElementById('gameReview' + expandNumber[i]).classList.toggle('hidden');
    document.getElementById('game' + expandNumber[i] + 'Arrow').classList.toggle('down')

  });
}

/* Creates listeners for the game titles, images, bannerImage and top games */

document.querySelectorAll('.topGame').forEach(title => {
  title.addEventListener('click', () => {
    setFocusedGame(title.innerHTML);
    assignHtmlPage("review");
  });
});

document.querySelectorAll('.gameBannerImage').forEach(image => {
  image.addEventListener('click', () => {
    setFocusedGame(image.alt);
    assignHtmlPage("review");
  });
});

document.querySelectorAll('.gameTitle').forEach(title => {
  title.addEventListener('click', () => {
    setFocusedGame(title.innerHTML);
    assignHtmlPage("review");
  });
});

document.querySelectorAll('.gameImage').forEach(image => {
  image.addEventListener('click', () => {
    setFocusedGame(image.alt);
    assignHtmlPage("review");
  });
});
