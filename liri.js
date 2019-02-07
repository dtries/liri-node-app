require("dotenv").config();

var keys = require("./keys.js");

var moment = require("moment");

var Spotify = require("node-spotify-api");

var axios = require("axios");

var fs = require("fs");

var nodeArgs = process.argv;

var whichSearch = process.argv[2];

var artist = "";

var movie = "";

var song = "";

var commandLine = "";

pickSearch(whichSearch);

function pickSearch(whichSearch) {

    switch (whichSearch) {

        case "concert-this":

            concertThis();

            break;

        case "spotify-this-song":

            musicThis();

            break;

        case "movie-this":

            movieThis();

            break;

        case "do-what-it-says":

            fs.readFile('random.txt', 'utf8', function (err, data) {
                if (err) throw err;
                commandLine = data.split(",");

                nodeArgs.splice(2, 1, commandLine[0],commandLine[1]);

                whichSearch = commandLine[0];

                pickSearch(whichSearch);

            });
            break;

        default:
            console.log("LIRI cannot process your request. Please check your entry and try again.");

    }
}

function movieThis() {
    if (nodeArgs.length < 4) {
        movie = "Mr+Nobody";
    } else {
        for (var i = 3; i < nodeArgs.length; i++) {

            if (i > 3 && i < nodeArgs.length) {
                movie = movie + "+" + nodeArgs[i];
            } else {
                movie += nodeArgs[i];

            }
        }
    }


    axios.get(" http://www.omdbapi.com/?apikey=trilogy&t=" + movie)
        .then(
            
            function (movieResponse) {
                
                console.log(" ");
                console.log("-----------------------------------------");
                console.log("Title: " + movieResponse.data.Title + "\n");
                console.log("Year Released: " + movieResponse.data.Year + "\n");
                console.log(movieResponse.data.Ratings[0].Source + " Rating: " + movieResponse.data.Ratings[0].Value + "\n");
                console.log(movieResponse.data.Ratings[1].Source + " Rating: " + movieResponse.data.Ratings[1].Value + "\n");
                console.log("Production Country(ies): " + movieResponse.data.Country + "\n");
                console.log("Language(s): " + movieResponse.data.Language + "\n");
                console.log("Plot: " + movieResponse.data.Plot + "\n");
                console.log("Actors: " + movieResponse.data.Actors + "\n");
                console.log("-----------------------------------------");

            }

        )

        .catch(function () {
            console.log("\nMOVIE TITLE CANNOT BE FOUND OR IS INCOMPLETE. Please enter again.");
        });

}

function musicThis() {

    if (nodeArgs.length < 4) {
        song = "The+Sign+Ace+of+Base";
        console.log(song);
        type = 'artist AND track'
    } else {
        for (var i = 3; i < nodeArgs.length; i++) {

            if (i > 3 && i < nodeArgs.length) {
                song = song + "+" + nodeArgs[i];
            } else {
                song += nodeArgs[i];

            }
        }
    }

    var spotify = new Spotify(keys.spotify);

    spotify.search({
        type: 'track',
        query: song,
        limit: 10
    }, function (err, songResponse) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        for (var i = 0; i < songResponse.tracks.items.length; i++) {

            if (songResponse.tracks.items[i].preview_url === null) {
                previewURL = "Song Preview Not Available";
            } else {
                previewURL = songResponse.tracks.items[i].preview_url;
            }

            console.log(" ");
            console.log("Track " + [i + 1] + " of " + songResponse.tracks.items.length);

            console.log(" ");
            console.log("-----------------------------------------");
            console.log("Artist(s): " + songResponse.tracks.items[i].artists[0].name + "\n"); //.name +"\n");
            console.log("Song Title: " + songResponse.tracks.items[i].name + "\n");
            console.log("Preview Link: " + previewURL + "\n");
            console.log("Album: " + songResponse.tracks.items[i].album.name + "\n");
            console.log("-----------------------------------------");
            console.log("-----------------------------------------");

        }


    });
}

function concertThis() {
    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
            artist = artist + "+" + nodeArgs[i];
        } else {
            artist += nodeArgs[i];

        }
    }



    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (bandsResponse) {

            for (var i = 0; i < bandsResponse.data.length; i++) {

                console.log(" ");
                console.log("Event " + [i + 1] + " of " + bandsResponse.data.length)
                console.log("-----------------------------------------");
                console.log("Venue: " + bandsResponse.data[i].venue.name);
                console.log("Location: " + bandsResponse.data[i].venue.city + "," + bandsResponse.data[i].venue.country);
                convertedDate = moment(bandsResponse.data[i].datetime).format("MM DD YYYY");
                console.log("Date: " + convertedDate);
                console.log("-----------------------------------------");
                console.log("-----------------------------------------");

            }

        }
        
    )

    .catch(function () {
        console.log("\nA CONCERT EVENT CANNOT BE FOUND OR THE SEARCH TERM(S) IS/ARE INCORRECT. Please check your entry and try again.");
    });
}