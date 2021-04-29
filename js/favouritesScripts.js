
import { sortGames } from "./gameData.js";
import { assignHtmlPage, setFocusedGame, setPlatformLogo, setScoreColour } from "./genericScripts.js";

/* Creates variable for the sorted games array */

const sortedGames = sortGames();

/* Disables favourites page button */

document.getElementById('favouritesButton').style.pointerEvents = "none";
document.getElementById('favouritesButton').style.color = "dimgray";

/* Call all of the functions */

setFavouriteGames()

/* Function to populate the favourites games page */

function setFavouriteGames() {
  let favouriteGames = document.getElementById('favouriteReviewContent');
  let gamePosition = 1;

  /* Loops through the entire sorted array */

  for(let i = sortedGames.length - 1; i >= 0; i--) {

    /* If the game is marked as a favourite it is created */

    if(sortedGames[i].favourite === "Yes") {

      /* Creates all the elements for one game article */

      let gameWrapper = document.createElement('section');
      let cover = document.createElement('figure');
      let image = document.createElement('img');
      let number = document.createElement('h3');
      let info = document.createElement('article');
      let title = document.createElement('h3');
      let platform = document.createElement('h6');
      let release = document.createElement('h6');
      let description = document.createElement('p');
      let scoreContainer = document.createElement('article');
      let score = document.createElement('h4');

      /* Assigns all the classnames and ids */

      gameWrapper.className = "gameContainerWrapper";
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

      gameWrapper.style.marginTop = "10px";
      gameWrapper.style.display = "flex";
      gameWrapper.style.borderTop = "none";
      gameWrapper.style.borderBottom = "thin solid black";
      image.style.transition = 'transform .2s';
      image.style.cursor = 'pointer';
      number.style.margin = "10px 3px 10px 5px";
      title.style.margin = "0";
      title.style.cursor = "pointer";

      image.src = sortedGames[i].cover;
      image.alt = sortedGames[i].coveralt;
      image.style.borderRadius = '5px';
      number.innerHTML = gamePosition + ". ";
      title.innerHTML = sortedGames[i].title;
      platform.innerHTML = setPlatformLogo(sortedGames[i].platform).outerHTML;
      release.innerHTML = "Release: " + sortedGames[i].release + "\n";
      description.innerHTML = sortedGames[i].description;
      score.innerHTML = sortedGames[i].score;

      title.appendChild(platform);

      /* Changes score background color depending on score */

      score.style.backgroundColor = setScoreColour(sortedGames[i].score);

      /* Constructs the game articles */

      cover.innerHTML = image.outerHTML;
      info.innerHTML = title.outerHTML + release.outerHTML + description.outerHTML;
      scoreContainer.innerHTML = score.outerHTML;
      gameWrapper.innerHTML = cover.outerHTML + number.outerHTML + info.outerHTML + scoreContainer.outerHTML;
      favouriteGames.appendChild(gameWrapper);

      gamePosition++;
    }
  }
  favouriteGames.style.display = "flex";
  return favouriteGames;
}

/* Creates listeners for the game titles and images */

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