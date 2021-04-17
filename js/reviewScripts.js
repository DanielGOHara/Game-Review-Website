
import { sortGames } from "./gameData.js";
import { setSuggestedList } from "./genericScripts.js";
import { setSuggestionList } from "./genericScripts.js";
import { setPlatformLogo } from "./genericScripts.js";

/* Creates variables */

const sortedGames = sortGames();
let focusedGameTitle = localStorage.getItem("GameTitle");

window.onload = () => {

  /* Call all of the functions */

  setSuggestionList('reviewSuggestionList');
  setSuggestedList('reviewSearchBar');
  setShowGames();

  /* If statement to check if the page is being loaded for the first time then randomly chooses a game article */

  if(focusedGameTitle === null) {
    let rand = Math.floor((Math.random() * sortedGames.length));
    updateFocusedGame(rand)
  } else {
    for(let i = 0; i < sortedGames.length; i++) {
      if(focusedGameTitle === sortedGames[i].title) {
        updateFocusedGame(i)
      }
    }
  }

  /* Function to create the slideshow game articles */

  function setShowGames() {
    let gameScroll = document.getElementById('gameScroll');

    /* Creates the forward and backwards arrows */

    const prev = document.createElement('a');
    const next = document.createElement('a');
    prev.className = "prev";
    next.className = "next";
    prev.innerHTML = "&#10094";
    next.innerHTML = "&#10095";

    gameScroll.appendChild(prev);

    /* Loops depending on the sorted arrays size */

    for (let i = sortedGames.length - 1; i >= 0; i--) {

      /* If the game title matches the focused title it is skipped */

      if (focusedGameTitle !== sortedGames[i].title) {

        /* Creates all the elements for one game article */

        let section = document.createElement('section');
        let cover = document.createElement('div');
        let image = document.createElement('img');
        let info = document.createElement('section');
        let title = document.createElement('h3');
        let platform = document.createElement('h6');
        let release = document.createElement('h6');
        let description = document.createElement('p');
        let scoreContainer = document.createElement('span');
        let score = document.createElement('span');

        /* Assigns all the classnames and ids */

        section.className = "gameArticle fade";
        cover.className = "articleCover";
        info.className = "articleInfo";
        title.className = "gameTitle";
        platform.className = "gamePlatform";
        release.className = "gameReleaseDate";
        description.className = "gameDescription";
        scoreContainer.className = "articleScore";
        score.className = "gameScore";

        section.style.minHeight = "160px !important";
        description.style.margin = "0";
        image.src = sortedGames[i].cover;
        image.alt = sortedGames[i].coveralt;
        image.style.borderRadius = '5px';
        title.innerHTML = sortedGames[i].title;
        release.innerHTML = "Release: " + sortedGames[i].release + "\n";
        description.innerHTML = sortedGames[i].description;
        score.innerHTML = sortedGames[i].score;
        platform.innerHTML = setPlatformLogo(sortedGames[i].platform).outerHTML;
        title.appendChild(platform);

        /* Changes score background color depending on score */

        if (sortedGames[i].score >= 75) {
          score.style.backgroundColor = 'green';
        } else if (75 > sortedGames[i].score && sortedGames[i].score >= 50) {
          score.style.backgroundColor = 'yellow'
        } else {
          score.style.backgroundColor = 'red';
        }

        /* Constructs the game article for the slideshow */

        cover.innerHTML = image.outerHTML;
        info.innerHTML = title.outerHTML + release.outerHTML + description.outerHTML;
        scoreContainer.innerHTML = score.outerHTML;
        section.innerHTML = cover.outerHTML + info.outerHTML + scoreContainer.outerHTML;
        gameScroll.append(section, next);
      }
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

  prev[0].addEventListener('click', () => {
    nextGame(-1);
  });

  next[0].addEventListener('click', () => {
    nextGame(1);
  });

  /* Function to increase or decrease the gameIndex */

  function nextGame(n) {
    showGames(gameIndex += n);
  }

  /* Main function for controlling and updating the currently displayed game */

  function showGames(n) {
    const games = document.getElementsByClassName("gameArticle");

    if (n > games.length) {
      gameIndex = 1
    }
    if (n < 1) {
      gameIndex = games.length
    }

    for (let i = 0; i < games.length; i++) {
      games[i].style.display = 'none';
    }
    clearTimeout(timer);
    if (gameIndex > games.length) {
      gameIndex = 1
    }
    games[gameIndex - 1].style.display = 'flex';
    timer = setTimeout(() => {
      gameIndex++;
      showGames();
    }, 20000);
  }

  /* Updates the main game article review on screen */

  function updateFocusedGame(index) {
    document.getElementById('gameCover').src = sortedGames[index].cover;
    document.getElementById('gameCover').alt = sortedGames[index].coveralt;
    document.getElementById('gameCover').style.borderRadius = '5px';
    document.getElementById('gameReviewTitle').innerHTML = sortedGames[index].title;
    document.getElementById('focusedPlatform').innerHTML = setPlatformLogo(sortedGames[index].platform).outerHTML;
    document.getElementById('gameReviewRelease').innerHTML = "Release: " + sortedGames[index].release;
    document.getElementById('gameReviewDescription').innerHTML = sortedGames[index].description;
    document.getElementById('gameReviewScore').innerHTML = sortedGames[index].score;
    document.getElementById('focusedGameReview').innerHTML = sortedGames[index].review;
    document.getElementById('youtubeVid').src = sortedGames[index].trailer;

    const score = document.getElementById('gameReviewScore');

    if (sortedGames[index].score >= 75) {
      score.style.backgroundColor = 'green';
    } else if (75 > sortedGames[index].score && sortedGames[index].score >= 50) {
      score.style.backgroundColor = 'yellow'
    } else {
      score.style.backgroundColor = 'red';
    }
  }

  /* Adds a listener to each slideshow game articles title and updates the one on screen if clicked */

  document.querySelectorAll('.gameTitle').forEach(title => {
    title.addEventListener('click', () => {
      for(let i = 0; i < sortedGames.length; i++) {
        if(title.innerHTML === sortedGames[i].title) {
          localStorage.setItem("GameTitle", sortedGames[i].title);
          location.reload();
        }
      }
    });
  });

  /* Removes pointer events from the focused game reviews title */

  document.getElementById('gameReviewTitle').style.pointerEvents = 'none';
}

/* Function used to set the focused game from outside the file */

export function setFocusedGame(title) {
  for(let i = 0; i < sortedGames.length; i++) {
    if(title.toUpperCase() === sortedGames[i].title.toUpperCase()) {
      localStorage.setItem("GameTitle", sortedGames[i].title);
    } else {
      if(title.toUpperCase() === sortedGames[i].coveralt.toUpperCase()) {
        localStorage.setItem("GameTitle", sortedGames[i].title);
      }
    }
  }
}