var request = require("request");

//user input
var inputString = process.argv;

var command = inputString[2];
var title = inputString[3];

if (command == "my-tweets") {

} else if (command == "spotify-this-song") {

} else if (command == "movie-this") {

	request("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {
		if (!error && response.statusCode === 200) {
			console.log("Title: " + JSON.parse(body).Title);
			console.log("Year: " + JSON.parse(body).Year);
			console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
			console.log("Rotten Tomatoes Rating of the movie: " + JSON.parse(body).Ratings[0].Value);
			console.log("Country: " + JSON.parse(body).Country);
			console.log("Language: " + JSON.parse(body).Language);
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("Actors: " + JSON.parse(body).Actors);

		}

	});

} else if (command == "do-what-it-says") {

}


