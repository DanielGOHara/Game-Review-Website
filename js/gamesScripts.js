
import { sortGames } from "./gameData.js";

const sortedGames = sortGames();
setShowGames();
listeners();

function setShowGames() {
  let gameScroll = document.getElementById('gameScroll');
  const prev = document.createElement('a');
  const next = document.createElement('a');
  prev.className = "prev";
  next.className = "next";
  prev.innerHTML = "&#10094";
  next.innerHTML = "&#10095";

  gameScroll.appendChild(prev);
  for(let i = sortedGames.length - 1; i >= 0; i--) {
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

    title.style.pointerEvents = "none";

    image.src = sortedGames[i].cover;
    image.alt = sortedGames[i].coveralt;
    title.innerHTML = sortedGames[i].title + " | " + sortedGames[i].platform + " |";
    release.innerHTML = "Release: " + sortedGames[i].release + "\n";
    description.innerHTML = sortedGames[i].description;
    score.innerHTML = sortedGames[i].score;

    if(sortedGames[i].score >= 75) {
      score.style.backgroundColor = 'green';
    } else if(75 > sortedGames[i].score && sortedGames[i].score >= 50) {
      score.style.backgroundColor = 'yellow'
    } else {
      score.style.backgroundColor = 'red';
    }

    cover.innerHTML = image.outerHTML;
    info.innerHTML = title.outerHTML + release.outerHTML + description.outerHTML;
    scoreContainer.innerHTML = score.outerHTML + spacer.outerHTML;
    article.innerHTML = cover.outerHTML + info.outerHTML + scoreContainer.outerHTML;
    gameScroll.appendChild(article);
    gameScroll.appendChild(next);
  }
  return gameScroll;
}

/* Creates a random number and a 20 second timer */

let gameIndex = Math.floor((Math.random() * 3) + 1);
let timer = setTimeout(showGames, 20000);
showGames();

/* Assigns the side arrows to prev and next */

const prev = document.getElementsByClassName("prev");
const next = document.getElementsByClassName("next");

/* Adds listeners to the size arrows */

prev[0].addEventListener('click', event => {
  nextGame(-1);
});

next[0].addEventListener('click', event => {
  nextGame(1);
});

/* Function to increase or decrease the gameIndex */

function nextGame(n) {
  showGames(gameIndex += n);
}

/* Main function for controlling and updating the currently displayed game */

function showGames(n) {
  const games = document.getElementsByClassName("gameArticle");

  if(n > games.length) { gameIndex = 1 }
  if(n < 1) { gameIndex = games.length }

  for(let i = 0; i < games.length; i++) {
    games[i].style.display = "none";
  }
  clearTimeout(timer);
  if(gameIndex > games.length) { gameIndex = 1 }
  games[gameIndex - 1].style.display = "flex";
  timer = setTimeout(() => {
    gameIndex++;
    showGames();
  }, 20000);
}

function listeners() {
  const searchBar = document.getElementById('searchBarGames');
  const searchButton = document.getElementById('searchButtonGames');

  searchButton.addEventListener('click', () => {
    console.log(searchBar.value);
  })
}

export function setFocusedGame(title) {

}