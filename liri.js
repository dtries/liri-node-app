
require("dotenv").config();

var moment = require("moment");

// var spotify=new spotify(keys.spotify);

var axios = require("axios");

var nodeArgs = process.argv;

var whichSearch=process.argv[2];

var artist = "";

var theBand;

switch (whichSearch) {
    case "concert-this":



    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
        artist = artist + "+" + nodeArgs[i];
        }
        else {
        artist += nodeArgs[i];
    
        }
    }



    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function(bandsResponse) {
            // theBand = JSON.stringify(bandsResponse);
            // console.log(bandsResponse);

            for (var i=0; i<bandsResponse.data.length; i++) {
            
            console.log(" ");
            console.log("Event " + [i+1] + " of "+ bandsResponse.data.length)    
            console.log("-----------------------------------------");    
            console.log("Venue: " +bandsResponse.data[i].venue.name);
            console.log("Location: "+bandsResponse.data[i].venue.city+","+bandsResponse.data[i].venue.country);
            convertedDate = moment(bandsResponse.data[i].datetime).format("MM DD YYYY");
            console.log("Date: "+convertedDate);
            console.log("-----------------------------------------");

            }
            
        }
    );
    break;

    case "spotify-this-song":
        console.log("Made it to Spotify");
        break;

    case "movie-this":
        console.log("Made it to movie search");
        axios.get(" http://www.omdbapi.com/?apikey=trilogy&t=batman")// + movie)
        .then(
            function(movieResponse) {
                console.log(movieResponse);
            }
        );

       
        break;
    
    case "do-what-it-says":
        console.log("Made it to do what it says");
        break;
    default:
        console.log("Search cannot be completed as entered, try again")
}

