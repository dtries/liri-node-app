# liri-node-app
## Individual Project 8 (LIRI Bot) 

The assignment was to implement Node JS to create a LIRI bot, similiar to iPhone's SIRI, but using typed language input instead of voice. The LIRI app uses the command line and node.js package to create search queries and return data based on one of four commands:

* *concert-this*

* *movie-this*

* *spotify-this-song*

* *do-what-it-says*


 
## Getting Started
1. Clone repo to your machine.
1. Enter 'npm install' in GitBash or your terminal.
   * This will install the proper js package files from a package JSON file.
1. Enter 'node liri.js' followed by a space and then one of the commands below (e.g., node liri.js concert-this).
   * What Each Command Does
     1. concert-this artists name (e.g., node liri.js concert-this kid rock)
          * Displays a listing of upcoming concert events for the artist specified.
          * If artists name is left blank a default message is displayed indicating concert information cannot be found and to try your entry again.
node liri.js spotify-this-song <song name>
Shows the following information about the song in terminal/bash window.

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
Or if no song is passed through, it will default to *"Florescent Adolescent" by Arctic Monkeys

node liri.js movie-this <movie name>
Shows the following information in terminal/bash.

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
Rotten Tomatoes Rating.
Rotten Tomatoes URL.
Or if no movie is passed through, it will default to "Mr. Nobody"

node liri.js do-what-it-says
Takes the text from random.txt and runs the song through spotify-this-song command
Tech used
Node.js
Twitter NPM Package - https://www.npmjs.com/package/twitter
Spotify NPM Package - https://www.npmjs.com/package/spotify
Request NPM Package - https://www.npmjs.com/package/request
Prerequisites
- Node.js - Download the latest version of Node https://nodejs.org/en/
Built With
VS Code - Text Editor
Authors
