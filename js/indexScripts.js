
import { sortGames } from "./gameData.js";
import { setFocusedGame } from "./gamesScripts.js";
import { assignHtmlPage } from "./genericScripts.js";

/* Creates variable for the sorted games array */

const sortedGames = sortGames();

/* Call all of the functions */

setGameBanner();
setGameBanner();
setTopGames();
setGames();

/* Functions to populate the index page */

function setGames() {
  const expandNumber = ["One", "Two", "Three", "Four", "Five"];
  let index = 0;

  /* Loops 5 times creating only 5 articles for the top 5 games */

  for(let i = sortedGames.length - 1; i >= sortedGames.length - 5; i--) {

    /* Creates all the elements for one game article */

    let reviewContent = document.getElementById('indexReviewContent');
    let article = document.createElement('article');
    let section = document.createElement('section');
    let cover = document.createElement('div');
    let image = document.createElement('img');
    let number = document.createElement('h3');
    let info = document.createElement('section');
    let title = document.createElement('h3');
    let platform = document.createElement('h6');
    let release = document.createElement('h6');
    let description = document.createElement('span');
    let scoreContainer = document.createElement('span');
    let score = document.createElement('section');
    let expand = document.createElement('span');
    let arrow = document.createElement('i');
    let review = document.createElement('span');
    let reviewTitle = document.createElement('label');

    /* Assigns all the classnames and ids */

    article.className = "articleContainer";
    section.className = "gameDetailsContainer";
    article.id = "game" + expandNumber[index];
    cover.className = "articleCover";
    image.className = "gameImage";
    number.className = "articleNumber";
    info.className = "articleInfo";
    title.className = "gameTitle";
    platform.className = "gamePlatform";
    release.className = "gameReleaseDate";
    description.className = "gameDescription";
    scoreContainer.className = "articleScore";
    score.className = "gameScore";
    expand.className = "articleExpand";
    expand.id = "game" + expandNumber[index] + "Expand";
    arrow.className = "arrow up";
    arrow.id = "game" + expandNumber[index] + "Arrow";
    review.className = "gameReview";
    review.id = "gameReview" + expandNumber[index];
    reviewTitle.className = "reviewTitle";

    section.style.display = 'flex';
    section.style.flexDirection = 'row';
    image.style.transition = 'transform .2s';
    image.style.cursor = 'pointer';

    image.src = sortedGames[i].cover;
    image.alt = sortedGames[i].coveralt;
    image.style.borderRadius = '5px';
    number.innerHTML = (index + 1) + ". ";
    title.innerHTML = sortedGames[i].title;
    release.innerHTML = "Release: " + sortedGames[i].release + "\n";
    description.innerHTML = sortedGames[i].description;
    score.innerHTML = sortedGames[i].score;
    expand.innerHTML = "Expand " + arrow.outerHTML;
    review.innerHTML = sortedGames[i].review;
    reviewTitle.innerHTML = "Review: ";
    platform.innerHTML = setPlatformLogo(sortedGames[i].platform).outerHTML;

    /* Changes score background color depending on score */

    if (sortedGames[i].score >= 75) {
      score.style.backgroundColor = 'green';
    } else if (75 > sortedGames[i].score && sortedGames[i].score >= 50) {
      score.style.backgroundColor = 'yellow'
    } else {
      score.style.backgroundColor = 'red';
    }

    /* Constructs the game article using appends */

    cover.appendChild(image);
    info.append(title, platform, release, description);
    scoreContainer.append(score, expand);
    section.append(cover, number, info, scoreContainer);
    article.append(section, review);
    reviewContent.appendChild(article);
    index++;
  }
}

/* Takes the platform string and inserts the platform logos */

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

/* Creates the required "span" and "label" tags to create and populate the game leaderboard */

function setTopGames() {
  let gamePosition = 1;
  let topGames = document.getElementById('topGames');

  /* Loops through the sorted array adding a new score line to the leaderboard for each game */

  for(let i = sortedGames.length - 1; i >= 0; i--) {
    let score = document.createElement('span');
    let dot = document.createElement('label')
    let title = document.createElement('label');
    let titleContainer = document.createElement('span');
    score.className = "topGameScore";
    score.innerHTML = sortedGames[i].score;
    dot.innerHTML = gamePosition + ". ";
    title.className = "topGame";
    title.innerHTML = sortedGames[i].title;

    /* Appends all of the elements to the title container */

    titleContainer.appendChild(dot);
    titleContainer.appendChild(title);
    titleContainer.appendChild(score);

    title.style.margin = '3px 0';

    /* Changes score background color depending on score */

    if(sortedGames[i].score >= 75) {
      score.style.backgroundColor = 'green';
    } else if(75 > sortedGames[i].score && sortedGames[i].score >= 50) {
      score.style.backgroundColor = 'yellow'
    } else {
      score.style.backgroundColor = 'red';
    }

    /* Sets some styling for the title container then appends it to the parent topGames element */

    titleContainer.style.marginTop = "5px";
    titleContainer.style.flexShrink = "0";
    topGames.appendChild(titleContainer);

    gamePosition++;
  }
  return topGames;
}

/* Creates the image elements for the infinite scrolling banner, it is called twice to make the banner fluid */

function setGameBanner() {
  const gameBanner = document.getElementById('gameBanner');
  const imageContainer = document.createElement('section');

  imageContainer.className = "gameBannerContainer";

  /* Loops through the sorted array creating an image element for each game */

  for(let i = 0; i < sortedGames.length; i++) {
    const image = document.createElement('img');
      image.src = sortedGames[i].cover;
      image.alt = sortedGames[i].coveralt;
      image.className = "gameBannerImage";
      image.style.cursor = 'pointer';
      imageContainer.append(image);
  }

  /* Appends the image container to the gameBanner parent element */

  gameBanner.append(imageContainer)
}


/* Expand Button Listeners */

const butOne = document.getElementById('gameOneExpand');
const butTwo = document.getElementById('gameTwoExpand');
const butThree = document.getElementById('gameThreeExpand');
const butFour = document.getElementById('gameFourExpand');
const butFive = document.getElementById('gameFiveExpand');

butOne.addEventListener('click', () => {
  document.getElementById('gameOne').classList.toggle("expanded");
  document.getElementById('gameReviewOne').classList.toggle('hidden');
  document.getElementById('gameOneArrow').classList.toggle('down');
});

butTwo.addEventListener('click', () => {
  document.getElementById('gameTwo').classList.toggle('expanded');
  document.getElementById('gameReviewTwo').classList.toggle('hidden');
  document.getElementById('gameTwoArrow').classList.toggle('down');
});

butThree.addEventListener('click', () => {
  document.getElementById('gameThree').classList.toggle('expanded');
  document.getElementById('gameReviewThree').classList.toggle('hidden');
  document.getElementById('gameThreeArrow').classList.toggle('down');
});

butFour.addEventListener('click', () => {
  document.getElementById('gameFour').classList.toggle('expanded');
  document.getElementById('gameReviewFour').classList.toggle('hidden');
  document.getElementById('gameFourArrow').classList.toggle('down');
});

butFive.addEventListener('click', () => {
  document.getElementById('gameFive').classList.toggle('expanded');
  document.getElementById('gameReviewFive').classList.toggle('hidden');
  document.getElementById('gameFiveArrow').classList.toggle('down');
});

/* Game title listeners */

document.querySelectorAll('.gameTitle').forEach(title => {
  title.addEventListener('click', () => {
    setFocusedGame(title.innerHTML);
    assignHtmlPage("games");
  });
});

document.querySelectorAll('.topGame').forEach(title => {
  title.addEventListener('click', () => {
    setFocusedGame(title.innerHTML);
    assignHtmlPage("games");
  } )
})

/* Game image listener */

document.querySelectorAll('.gameImage').forEach(image => {
  image.addEventListener('click', () => {
    setFocusedGame(image.alt);
    assignHtmlPage("games");
  });
});

document.querySelectorAll('.gameBannerImage').forEach(image => {
  image.addEventListener('click', () => {
    setFocusedGame(image.alt);
    assignHtmlPage("games");
  });
});
