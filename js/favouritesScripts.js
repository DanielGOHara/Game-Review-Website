
import { sortGames } from "./gameData.js";
import { setFocusedGame } from "./reviewScripts.js";
import { assignHtmlPage } from "./genericScripts.js";
import { setSuggestedList } from "./genericScripts.js";
import { setSuggestionList } from "./genericScripts.js";
import { setPlatformLogo } from "./genericScripts.js";

/* Creates variable for the sorted games array */

const sortedGames = sortGames();

/* Call all of the functions */

setSuggestionList('favouritesSuggestionList');
setSuggestedList('favouritesSearchBar');
setFavouriteGames()

/* Function to populate favourites page game articles */

function setFavouriteGames() {
  let favouriteGames = document.getElementById('favouriteReviewContent');
  let gamePosition = 1;

  /* Loops through the entire sorted array */

  for(let i = sortedGames.length - 1; i >= 0; i--) {

    /* If the game is marked as a favourite it is created */

    if(sortedGames[i].favourite === "Yes") {

      /* Creates all the elements for one game article */

      let section = document.createElement('section');
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
      let spacer = document.createElement('span');

      /* Assigns all the classnames and ids */

      section.className = "gameArticle";
      cover.className = "articleCover";
      image.className = "gameImage";
      number.className = "articleNumber";
      info.className = "articleInfo";
      title.className = "gameTitle";
      platform.className = "gamePlatform";
      release.className = "gameReleaseDate";
      description.className = "gameDescription";
      scoreContainer.className = "articleScore";
      score.className = "gameScore";
      spacer.className = "articleSpacer";

      section.style.display = "flex";
      section.style.borderTop = "none";
      section.style.borderBottom = "thin solid lightgray";
      image.style.transition = 'transform .2s';
      image.style.cursor = 'pointer';
      description.style.margin = "0";

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

      if (sortedGames[i].score >= 75) {
        score.style.backgroundColor = 'green';
      } else if (75 > sortedGames[i].score && sortedGames[i].score >= 50) {
        score.style.backgroundColor = 'yellow'
      } else {
        score.style.backgroundColor = 'red';
      }

      /* Constructs the game articles */

      cover.innerHTML = image.outerHTML;
      info.innerHTML = title.outerHTML + release.outerHTML + description.outerHTML;
      scoreContainer.innerHTML = score.outerHTML + spacer.outerHTML;
      section.innerHTML = cover.outerHTML + number.outerHTML + info.outerHTML + scoreContainer.outerHTML;
      favouriteGames.appendChild(section);

      gamePosition++;
    }
  }
  return favouriteGames;
}

/* Game title listeners */

document.querySelectorAll('.gameTitle').forEach(title => {
  title.addEventListener('click', () => {
    setFocusedGame(title.innerHTML);
    assignHtmlPage("review");
  });
});

/* Game image listener */

document.querySelectorAll('.gameImage').forEach(image => {
  image.addEventListener('click', () => {
    setFocusedGame(image.alt);
    assignHtmlPage("review");
  });
});