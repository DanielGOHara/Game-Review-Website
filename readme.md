# CTEC3905 Assignment - Daniel's Game Reviews<br/>

Front-End Web Development Project (Javascript, HTML5 & CSS3) First | 90% 

A game review site with a variety of features allowing the user to view basic game descriptions as well as explore my personal reviews of the game with a score for each. The site also has seperate pages for personal favourites and a page designated for in depth reviews of a specific game with an included trailer, this page also has a game slideshow at the bottom. 

HTML File(s) - `index.html`, `review.html` & `favourites.html`.<br/>
CSS File(s) - `styles.css`.<br/>
Javascript File(s) - `genericScripts.js`, `indexScripts.js`, `reviewScripts.js`, `favouritesScripts.js` & `gameData.js`.<br/>

`index.html` - Home page containing information on a variety of games with the top 5 being sorted in order of score and a side bar leaderboard for all games and their scores. <br/>
`review.html` - More in depth review page including a trailer for the focused game and a game scroll bar at the bottom which cycles through all games in the `gameData.js` file.<br/>
`favourites.html` - Lists all games I have favourited, but does not like the index.html page show the review only the title, description and score.<br/>

`styles.css` - Styling for all pages.<br/>

`genericScripts.js` - Javascript used mainly for header elements like the search bar and button as well as the page links. This file is used across all html files.<br/>
`indexScripts.js` - File used specifically for the `index.html` page but does import a function from `reviewScripts.js`.<br/>
`reviewScripts.js` - File used specifically for the `review.html` page but does export a function that allows the user to set the specified game on screen.<br/>
`favouritesScripts.js` - File used specifically for the `favourites.html` page but does import a function from `reviewScripts.js`.<br/>
`gameData.js` - Used to store all of the game data in JSON format into a single variable with one function used to sort it and return a sorted list.<br/>

References:<br/>
Suggestion List - https://www.w3schools.com/howto/howto_js_autocomplete.asp<br/>
Imports & Modules - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import<br/>
JSON Data Handling - https://www.geeksforgeeks.org/json-data-types/#:~:text=JSON%20(JavaScript%20Object%20Notation)%20is,easy%20to%20understand%20and%20generate<br/>
QuerySelectorAll - https://www.geeksforgeeks.org/html-dom-queryselectorall-method/#:~:text=The%20querySelectorAll()%20method%20in,The%20index%20starts%20at%200<br/>
Game Slideshow - https://www.w3schools.com/howto/howto_js_slideshow.asp<br/>
Game Covers & Background Covers- https://google.com<br/>
Game Trailers - https://youtube.com
