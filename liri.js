require("dotenv").config();

var moment = require("moment");

// var spotify=new spotify(keys.spotify);

var axios = require("axios");

var nodeArgs = process.argv;

var whichSearch=process.argv[2];

var artist = "";

var movie = "";

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

        if (nodeArgs.length < 4) {
            movie = "Mr+Nobody";
            console.log(movie);
        }

        else {
            for (var i = 3; i < nodeArgs.length; i++) {

                if (i > 3 && i < nodeArgs.length) {
                movie = movie + "+" + nodeArgs[i];
                }
                else {
                movie += nodeArgs[i];
            
                }
            }
        }



        console.log("the movie title is: "+ movie)

        axios.get(" http://www.omdbapi.com/?apikey=trilogy&t=" + movie)
        .then(
            function(movieResponse) {

                console.log(" ");
                console.log("-----------------------------------------");
                console.log("Title: " + movieResponse.data.Title +"\n");
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

       
        break;
    
    case "do-what-it-says":
        console.log("Made it to do what it says");
        break;
    default:
      
}

