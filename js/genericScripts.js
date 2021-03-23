
/* Adds a listener to each button on each page */

import { setFocusedGame } from "./gamesScripts.js";

document.querySelectorAll('.gamesButton').forEach(item => {
  item.addEventListener('click', () => {
    assignHtmlPage("games");
  });
});

document.querySelectorAll('.homeButton').forEach(item => {
  item.addEventListener('click', () => {
    assignHtmlPage("home");
  });
});

document.querySelectorAll('.favouritesButton').forEach(item => {
  item.addEventListener('click', () => {
    assignHtmlPage("favourite");
  });
});

document.querySelectorAll('.gameTitle').forEach(item => {
  item.addEventListener('click', () => {
    setFocusedGame(item.innerHTML);
    assignHtmlPage("games");
  });
});

document.querySelectorAll('.searchBar').forEach(item => {
  document.querySelectorAll('.searchButton').forEach( item2 => {
    item.addEventListener('keyup', event => {
      if(event.keyCode === 13) {
        setFocusedGame(item.value);
        assignHtmlPage("games");
      }
    });
    item2.addEventListener('click', () => {
      setFocusedGame(item.value);
      assignHtmlPage("games");
    });
  });
});

/* Redirects to desired page */

function assignHtmlPage(page) {
  if (page === "home") {
    window.location.href = 'index.html'
  } else if (page === "games") {
    window.location.href = 'games.html'
  } else if (page === "favourite") {
    window.location.href = 'favourites.html'
  }
}
