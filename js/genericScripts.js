
import { sortGames } from "./gameData.js";

/* Creates variables */

const sortedGames = sortGames();
let suggestions = [], suggestionListId = "";

/* Populates the suggestions array with all of the game titles */

for(let i = 0; i < sortedGames.length; i++) {
  suggestions[i] = sortedGames[i].title;
}

/* Creates listeners for the games button on each page */

document.querySelectorAll('.reviewButton').forEach(gameButton => {
  gameButton.addEventListener('click', () => {
    assignHtmlPage("review");
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
          assignHtmlPage("review");
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
        assignHtmlPage("review");
    } else {
        searchBar.style.borderColor = 'red';
        setTimeout(() => {
          searchBar.style.borderColor = 'white';
        }, 2000)
      }
    });
  });
});

/* Function to create, update and remove the suggestion list below the search bar */

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

    /* Append the section element to the suggestionList container's */

    suggestionList.appendChild(section);

    for (index = 0; index < suggestions.length; index++) {

      /* Check if the game title starts with the same letters as the input text field's value */

      if (suggestions[index].substr(0, suggestion.length).toUpperCase() === suggestion.toUpperCase()) {

        /* Create a li element for each suggested game */

        game = document.createElement("li");
        game.className = "suggestion";

        /* Makes the matching letters in the suggested game bold */

        game.innerHTML = "<strong>" + suggestions[index].substr(0, suggestion.length) + "</strong>";
        game.innerHTML += suggestions[index].substr(suggestion.length);

        /* Insert a input field that will hold the current games array value */

        game.innerHTML += "<input type = 'hidden' value = '" + suggestions[index] + "'>";

        /* Creates a listener for each game in the suggestion list */

        game.addEventListener("click", function() {
          setFocusedGame(this.getElementsByTagName("input")[0].value);
          assignHtmlPage("review");
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

  /* Creates a listener for when the user clicks anywhere on the webpage */

  document.addEventListener("click", function (event) {
    closeAllLists(event.target);
  });
}

/* Function to check if the inputted value in the search bar matches a known game title */

function checkGame(title) {
  for(let i = 0; i < sortedGames.length; i++) {
    if(title.toUpperCase() === sortedGames[i].title.toUpperCase()) {
      return true;
    }
  }
  return false;
}

/* Function used to set the search bar Id depending on what page is accessed */

export function setSuggestedList(searchBarId) {
  suggestedList(searchBarId);
}

/* Function used to set the suggestion list Id depending on what page is accessed */

export function setSuggestionList(listId) {
  suggestionListId = listId;
}

/* Function to redirects you to desired page */

export function assignHtmlPage(page) {
  if (page === "home") {
    window.location.href = 'index.html'
  } else if (page === "review") {
    window.location.href = 'review.html'
  } else if (page === "favourite") {
    window.location.href = 'favourites.html'
  }
}

/* Function that takes the platform string and inserts the platform logos */

export function setPlatformLogo(platformString) {
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

/* Function that sets the desired colour based on the score */

export function setScoreColour(score) {
  let colour;
  if (score >= 75) {
    colour = 'green';
  } else if (75 > score && score >= 50) {
    colour = 'yellow'
  } else {
    colour = 'red';
  }
  return colour;
}

/* Function used to set the focused game on the review page */

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
