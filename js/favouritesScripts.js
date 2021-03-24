
import { sortGames } from "./gameData.js";
import { setFocusedGame } from "./gamesScripts.js";
import { assignHtmlPage } from "./genericScripts.js";

const sortedGames = sortGames();
setFavouriteGames()

function setFavouriteGames() {
  let favouriteGames = document.getElementById('favouriteReviewContent');
  let gamePosition = 1;

  for(let i = sortedGames.length - 1; i >= 0; i--) {
    if(sortedGames[i].favourite === "Yes") {
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
      dot.innerHTML = gamePosition + ". ";
      title.innerHTML = sortedGames[i].title;
      platform.innerHTML = setPlatformLogo(sortedGames[i].platform).outerHTML;
      release.innerHTML = "Release: " + sortedGames[i].release + "\n";
      description.innerHTML = sortedGames[i].description;
      score.innerHTML = sortedGames[i].score;

      title.appendChild(platform);

      if (sortedGames[i].score >= 75) {
        score.style.backgroundColor = 'green';
      } else if (75 > sortedGames[i].score && sortedGames[i].score >= 50) {
        score.style.backgroundColor = 'yellow'
      } else {
        score.style.backgroundColor = 'red';
      }

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

document.querySelectorAll('.gameTitle').forEach(title => {
  title.addEventListener('click', () => {
    setFocusedGame(title.innerHTML);
    assignHtmlPage("games");
  });
});