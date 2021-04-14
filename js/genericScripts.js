
/* Adds a listener to each button on each page */

import { setFocusedGame } from "./gamesScripts.js";
import { sortGames } from "./gameData.js";

const sortedGames = sortGames();

/* Creates listeners for the games button on each page */

document.querySelectorAll('.gamesButton').forEach(gameButton => {
  gameButton.addEventListener('click', () => {
    assignHtmlPage("games");
  });
});

/* Creates listeners for the home button on each page */

document.querySelectorAll('.homeButton').forEach(homeButton => {
  homeButton.addEventListener('click', () => {
    assignHtmlPage("home");
  });
});

/* Creates listeners for the favourites button on each page */

document.querySelectorAll('.favouritesButton').forEach(favouritesButton => {
  favouritesButton.addEventListener('click', () => {
    assignHtmlPage("favourite");
  });
});

/* Creates listeners for the search bar and button on each page */

document.querySelectorAll('.searchBar').forEach(searchBar => {
  document.querySelectorAll('.searchButton').forEach( searchButton => {
    searchBar.addEventListener('keyup', event => {
      if(event.keyCode === 13) {
        if(checkGame(searchBar.value)) {
          setFocusedGame(searchBar.value);
          assignHtmlPage("games");
        } else {
          searchBar.style.borderColor = 'red';
          setTimeout(() => {
            searchBar.style.borderColor = 'white';
          }, 2000);
        }
      }
    });
    searchButton.addEventListener('click', () => {
      if (checkGame(searchBar.value)) {
        setFocusedGame(searchBar.value);
        assignHtmlPage("games");
    } else {
        searchBar.style.borderColor = 'red';
        setTimeout(() => {
          searchBar.style.borderColor = 'white';
        }, 2000)
      }
    });
  });
});

document.querySelectorAll('.searchBar').forEach(searchBar => {
  const suggestionsList = document.getElementsByClassName('.suggestion');
  searchBar.addEventListener('change', event => {
    const filteredGames = sortedGames.filter(item => {
      return item.title.includes(searchBar.value);
    });
    const gameArticles = filteredGames.map(suggestions());
    gameArticles.forEach(article => {
      suggestionsList.appendChild(article);
    })
  })
})

function suggestions(array) {

}


function checkGame(title) {
  for(let i = 0; i < sortedGames.length; i++) {
    if(title.toUpperCase() === sortedGames[i].title.toUpperCase()) {
      return true;
    }
  }
  return false;
}

/* Redirects to desired page */

export function assignHtmlPage(page) {
  if (page === "home") {
    window.location.href = 'index.html'
  } else if (page === "games") {
    window.location.href = 'games.html'
  } else if (page === "favourite") {
    window.location.href = 'favourites.html'
  }
}
