
/* Adds a listener to each button on each page */

import { setFocusedGame } from "./gamesScripts.js";
import { sortGames } from "./gameData.js";

const sortedGames = sortGames();
let suggestions = [], suggestionListId = "";

for(let i = 0; i < sortedGames.length; i++) {
  suggestions[i] = sortedGames[i].title;
}

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

function suggestedList(searchBarId) {

  let currentFocus;
  let suggestionList = document.getElementById(suggestionListId);
  let searchBar = document.getElementById(searchBarId);

  /* Creates a listener for the search bar to listen for input */

  searchBar.addEventListener("input", function() {
    let section, game, index, suggestion = this.value;

    /* Closes any already open suggestion lists */

    closeAllLists();
    if (!suggestion) { return false;}

    currentFocus = -1;

    section = document.createElement("section");
    section.setAttribute("id", this.id + "autocomplete-list");
    section.setAttribute("class", "autocomplete-items");
    section.style.borderTop = "thin solid darkgray";

    /* Append the section element to the suggestionList container's */

    suggestionList.appendChild(section);

    for (index = 0; index < suggestions.length; index++) {

      /* Check if the game title starts with the same letters as the input text field's value */

      if (suggestions[index].substr(0, suggestion.length).toUpperCase() === suggestion.toUpperCase()) {

        /* Create a li element for each suggested game */

        game = document.createElement("li");
        game.className = "suggestion";
        game.style.borderRadius = "5px";

        /* Makes the matching letters in the suggested game bold */

        game.innerHTML = "<strong>" + suggestions[index].substr(0, suggestion.length) + "</strong>";
        game.innerHTML += suggestions[index].substr(suggestion.length);

        /* Insert a input field that will hold the current games array value */

        game.innerHTML += "<input type = 'hidden' value = '" + suggestions[index] + "'>";

        /* Creates a listener for each game in the suggestion list */

        game.addEventListener("click", function() {
          setFocusedGame(this.getElementsByTagName("input")[0].value);
          assignHtmlPage("games");
          closeAllLists();
        });
        section.appendChild(game);
      }
    }
  });

  /* Function that closes all lists */

  function closeAllLists(element) {
    let suggestionList = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < suggestionList.length; i++) {
      if (element !== suggestionList[i] && element !== searchBar) {
        suggestionList[i].parentNode.removeChild(suggestionList[i]);
      }
    }
  }

  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (event) {
    closeAllLists(event.target);
  });
}

function checkGame(title) {
  for(let i = 0; i < sortedGames.length; i++) {
    if(title.toUpperCase() === sortedGames[i].title.toUpperCase()) {
      return true;
    }
  }
  return false;
}

export function setSuggestedList(searchBarId) {
  suggestedList(searchBarId);
}

export function setSuggestionList(listId) {
  suggestionListId = listId;
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
