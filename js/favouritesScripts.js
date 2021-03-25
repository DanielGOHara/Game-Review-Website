
import { sortGames } from "./gameData.js";
import { setFocusedGame } from "./gamesScripts.js";
import { assignHtmlPage } from "./genericScripts.js";

const sortedGames = sortGames();
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

      let article = document.createElement('article');
      let cover = document.createElement('div');
      let image = document.createElement('img');
      let number = document.createElement('h3');
      let info = document.createElement('section');
      let dot = document.createElement('label');
      let title = document.createElement('h3');
      let platform = document.createElement('h6');
      let release = document.createElement('h6');
      let description = document.createElement('span');
      let scoreContainer = document.createElement('span');
      let score = document.createElement('label');
      let spacer = document.createElement('span');

      /* Assigns all the classnames and ids */

      article.className = "gameArticle";
      cover.className = "articleCover";
      number.className = "articleNumber";
      info.className = "articleInfo";
      dot.className = "articleNumber"
      title.className = "gameTitle";
      platform.className = "gamePlatform";
      release.className = "gameReleaseDate";
      description.className = "gameDescription";
      scoreContainer.className = "articleScore";
      score.className = "gameScore";
      spacer.className = "articleSpacer";

      article.style.display = "flex";
      article.style.borderTop = "none";
      article.style.borderBottom = "thin solid lightgray";

      image.src = sortedGames[i].cover;
      image.alt = sortedGames[i].coveralt;
      image.style.borderRadius = '5px';
      dot.innerHTML = gamePosition + ". ";
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
      article.innerHTML = cover.outerHTML + dot.outerHTML + info.outerHTML + scoreContainer.outerHTML;
      favouriteGames.appendChild(article);

      gamePosition++;
    }
  }
  return favouriteGames;
}

/* Takes the platform string and inserts the platform logos */

function setPlatformLogo(platformString) {
  let platformContainer = document.createElement('span');
  const platformArray = platformString.split(", ");
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
  return platformContainer;
}

/* Game title listeners */

document.querySelectorAll('.gameTitle').forEach(title => {
  title.addEventListener('click', () => {
    setFocusedGame(title.innerHTML);
    assignHtmlPage("games");
  });
});