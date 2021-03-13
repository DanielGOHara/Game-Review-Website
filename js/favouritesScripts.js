
import { sortGames } from "./gameData.js";

const sortedGames = sortGames();
setFavouriteGames()
listeners();

function listeners() {
  const searchBar = document.getElementById('searchBarFavourites');
  const searchButton = document.getElementById('searchButtonFavourites');

  searchButton.addEventListener('click', () => {
    console.log(searchBar.value);
  });
}

function setFavouriteGames() {
  let favouriteGames = document.getElementById('favouriteReviewContent');

  for(let i = sortedGames.length - 1; i >= 0; i--) {
    if(sortedGames[i].favourite === "Yes") {
      let article = document.createElement('article');
      let cover = document.createElement('div');
      let image = document.createElement('img');
      let number = document.createElement('h3');
      let info = document.createElement('section');
      let title = document.createElement('h3');
      let release = document.createElement('h6');
      let description = document.createElement('span');
      let scoreContainer = document.createElement('span');
      let score = document.createElement('label');
      let spacer = document.createElement('span');

      article.className = "gameArticle fade";
      cover.className = "articleCover";
      number.className = "articleNumber";
      info.className = "articleInfo";
      title.className = "gameTitle";
      release.className = "gameReleaseDate";
      description.className = "gameDescription";
      scoreContainer.className = "articleScore";
      score.className = "gameScore";
      spacer.className = "articleSpacer";

      article.style.display = "flex";

      image.src = sortedGames[i].cover;
      image.alt = sortedGames[i].coveralt;
      title.innerHTML = sortedGames[i].title + " | " + sortedGames[i].platform + " |";
      release.innerHTML = "Release: " + sortedGames[i].release + "\n";
      description.innerHTML = sortedGames[i].description;
      score.innerHTML = sortedGames[i].score;

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
      article.innerHTML = cover.outerHTML + info.outerHTML + scoreContainer.outerHTML;
      favouriteGames.appendChild(article);
    }
  }
  return favouriteGames;
}