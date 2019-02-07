# liri-node-app
## Individual Project 8 (LIRI Bot) 

The assignment was to implement Node JS to create a LIRI bot, similiar to iPhone's SIRI, but using typed language input instead of voice. The LIRI app uses the command line and node.js package to create search queries and return data based on one of four commands:

* *concert-this*

* *movie-this*

* *spotify-this-song*

* *do-what-it-says*

## Narrated Video Demonstration
[YouTube](https://youtu.be/p6vU3wdW2UQ)
 
## Getting Started
1. Clone repo to your machine.
1. Enter 'npm install' in GitBash or your terminal.
   * This will install the proper js package files from a package JSON file.
1. Enter 'node liri.js' followed by a space and then one of the commands below (e.g., node liri.js concert-this).
   * Result of Each Command Type:
     1. concert-this artists name (e.g., node liri.js concert-this kid rock)
          * Displays a listing of upcoming concert events for the artist specified.
          * If artists name is left blank a default message is displayed indicating concert information cannot be found and to try your entry again.

     1. spotify-this-song song name (e.g., node liri.js spotify-this-song enter sandman)
          * Displays listing of tracks with the following information in terminal/bash window:

            * Artist(s)
            * Track Title
            * A preview link for the song from Spotify
            * Album on which the song appears
            
            * *If a song title is not entered (e.g., node liri.js spotify-this-song), the search will default to "I want it that way" by The Backstreet Boys.

     1. movie-this movie name (e.g., node liri.js movie-this raiders of the lost ark)
          * Displays the following information about the movie in terminal/bash window:

            * Title
            * Release Year
            * IMDB Rating 
            * Rotten Tomatoes Rating or Metacritic Rating (if Rotten Tomatoes is not available)
            * Production Country(ies)
            * Languages used in the film
            * Plot Synopsis.
            * Main Actors

            * *If a movie title is not entered (e.g., node liri.js movie-this), the search will default to "Mr. Nobody".

      1. do-what-it-says (e.g., node liri.js do-what-it-says)
          * Reads in text from a file titled random.txt, parses the informmation, builds information need for the search, and then runs the appropriate search through liri.
          
       ### Example of wording in random.txt file for the three types of searches
           1. To run an artist concert search:
              * concert-this,kid rock
           2. To run an movie title search:
              * movie-this,batman
           3. To run a spotify song title search:
              * spotify-this-song,I want it that way
                     
## Tech Employed
* Node.js - (see below)
* Axios.js NPM Package - https://www.npmjs.com/package/axios
* Spotify NPM Package - https://www.npmjs.com/package/spotify  (To access the SPOTIFY API)
* fs NPM Package - https://www.npmjs.com/package/fs
* moment NPM Package - https://www.npmjs.com/package/moment
* dotenv NPM Package - https://www.npmjs.com/package/dotenv
* OMDB API - http://www.omdbapi.com/
* Bands in Town API - http://www.artists.bandsintown.com/bandsintown-api 

## Prerequisites
* Node.js - The latest version of Node is available at: https://nodejs.org/en/

## Built With
VS Code - Text Editor
## Authored and Maintained By:
Dennis Ries

Contact: dtries@gmail.com

© 2019 GitHub, Inc.
Terms
Privacy
Security
Status

