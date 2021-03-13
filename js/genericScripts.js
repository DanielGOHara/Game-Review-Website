
/* Adds a listener to each button on each page */

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
