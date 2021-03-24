
/* Adds a listener to each button on each page */

import { setFocusedGame } from "./gamesScripts.js";

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
        setFocusedGame(searchBar.value);
        assignHtmlPage("games");
      }
    });
    searchButton.addEventListener('click', () => {
      setFocusedGame(searchBar.value);
      assignHtmlPage("games");
    });
  });
});

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
