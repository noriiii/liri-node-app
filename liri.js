// global variables start

var request = require("request");
var inputString = process.argv;
var command = inputString[2];
var title = inputString[3];

// global variables end

// twitter start

if (command == "my-tweets") {

	var Twitter = require('twitter');

	var client = new Twitter({
    
    	consumer_key: 'gQrom65Eue7x9KeghiTJR0liI',
		consumer_secret: 'LkCv3n4Hx5Sw0HptNKPDS73bXuuBST4MuMjoa4DZI9UzBahT7u',
  		access_token_key: '883943556997566464-r6cro3jDpaTTAGuPa0VFCTFhkjyGuOi',
  		access_token_secret: '9STqvuSloTzWlywF6av8od8G2u0vycCI4CP8LPSvYX0Gt'
	});

	client.get('favorites/list', function(error, tweets, response) {
  		if (!error && response.statusCode === 200){
  			console.log(tweets);  // The favorites. 
  			console.log(response);  // Raw response object.
		} 
	});

// twitter end

} 

// spotify start

else if (command == "spotify-this-song") {

var spotify = require("node-spotify-api");

var spotify = new Spotify({
  id: "2716dad05b7545958cc412fa5beae628",
  secret: "5577b9c04a6f43d2ac56f30002e5970c"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

} 

// spotify end

// omdb start

else if (command == "movie-this") {
	if (title == " ") {
		request("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=40e9cece", function(error, response, body) {
			if (!error && response.statusCode === 200) {
				console.log("Title: " + JSON.parse(body).Title);
				console.log("Year: " + JSON.parse(body).Year);
				console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
				console.log("Rotten Tomatoes Rating of the movie: " + JSON.parse(body).Ratings[1].Value);
				console.log("Country: " + JSON.parse(body).Country);
				console.log("Language: " + JSON.parse(body).Language);
				console.log("Plot: " + JSON.parse(body).Plot);
				console.log("Actors: " + JSON.parse(body).Actors);
			}
		});
	}
	else {
		request("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {
			if (!error && response.statusCode === 200) {
				console.log("Title: " + JSON.parse(body).Title);
				console.log("Year: " + JSON.parse(body).Year);
				console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
				console.log("Rotten Tomatoes Rating of the movie: " + JSON.parse(body).Ratings[1].Value);
				console.log("Country: " + JSON.parse(body).Country);
				console.log("Language: " + JSON.parse(body).Language);
				console.log("Plot: " + JSON.parse(body).Plot);
				console.log("Actors: " + JSON.parse(body).Actors);
			}
		});
	}
}

// omdb end


 else if (command == "do-what-it-says") {

 	var fs = require("fs");

 	fs.readFile("random.txt", "utf8", function(error, data){

 		if (error) {
 			return console.log(error);
 		}

 		console.log(data);

 	});

}


