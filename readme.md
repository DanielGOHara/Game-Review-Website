# CTEC3905 Assignment - Daniel's Game Reviews

A game review site with a variety of features allowing the user to view basic game descriptions as well as explore my personal reviews of the game with a score for each. The site also has seperate pages for personal favourites and a page designated for in depth reviews of a specific game with an included trailer, this page also has a game slideshow at the bottom. 

HTML File(s) - `index.html`, `games.html` & `favourites.html`.
CSS File(s) - `styles.css`.
Javascript File(s) - `genericScripts.js`, `indexScripts.js`, `gamesScripts.js`, `favouritesScripts.js` & `gameData.js`.

`index.html` - Home page containing information on a variety of games with the top 5 being sorted in order of score and a side bar leaderboard for all games and their scores. 
`games.html` - More in depth review page including a trailer for the focused game and a game scroll bar at the bottom which cycles through all games in the `gameData.js` file.
`favourites.html` - Lists all games I have favourited, but does not like the index.html page show the review only the title, description and score.

`styles.css` - Styling for all pages.

`genericScripts.js` - Javascript used mainly for header elements like the search bar and button as well as the page links. This file is used across all html files.
`indexScripts.js` - File used specifically for the `index.html` page but does import a function from `gamesScripts.js`.
`gamesScripts.js` - File used specifically for the `games.html` page but does export a function that allows the user to set the specified game on screen.
`favouritesScripts.js` - File used specifically for the `favourites.html` page but does import a function from `gamesScripts.js`.
`gameData.js` - Used to store all of the game data in JSON format into a single variable with one function used to sort it and return a sorted list.

References:
JSON Data Handling - https://www.geeksforgeeks.org/json-data-types/#:~:text=JSON%20(JavaScript%20Object%20Notation)%20is,easy%20to%20understand%20and%20generate
QuerySelectorAll - https://www.geeksforgeeks.org/html-dom-queryselectorall-method/#:~:text=The%20querySelectorAll()%20method%20in,The%20index%20starts%20at%200
Game Slideshow - https://www.w3schools.com/howto/howto_js_slideshow.asp
Game Covers - https://google.com
Game Trailers - https://youtube.com
