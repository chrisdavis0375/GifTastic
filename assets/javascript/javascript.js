$(document).ready(function() {
//Starting game button array-------------------------------------------------------------------------------------
var games = ["The Last of Us", "Mass Effect", "Monster Hunter", "The Division"];

//Function to generate new button--------------------------------------------------------------------------------

function generateButton() {

    $("#buttons-view").empty();

    for (var i = 0; i < games.length; i++) {
        var newButton = $("<button class = 'game'>", games[i]);

        newButton.attr("data-game", games[i]);

        newButton.text(games[i]);

        $("#buttons-view").append(newButton);
    }
}

//On click event to add user input to newButton------------------------------------------------------------------

$("#add-game").on('click', function (event){

    event.preventDefault();

    var newGame = $("#games-input").val().trim();

    games.push(newGame);

    generateButton();

    console.log(event);

    $("#games-input").val("");
    
})

generateButton();

//Function for displaying game gifs-----------------------------------------------------------------------------

var handler = function () {

    $("#gifs-go-here").empty();

    var gameSearch = $(this).attr("data-game")

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gameSearch + "&api_key=p9fkkVrzda7Nl4tbNojF3thiJKDbg2P3&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

    var results = response.data;

    for ( var i = 0; i < results.length; i++) {

    var gameDiv = $("#gifs-go-here");

    var rating = results[i].rating;

    var p = $("<p>").text("Rating: " + rating);

    var image = $("<img class = 'gif'>").attr("src", results[i].images.fixed_height.url)
    image.attr("data-still", results[i].images.fixed_height_still.url);
    gameDiv.append(image);
    gameDiv.append(p);
    }

})

};
$("body").on('click', ".gif", function() {
    var currentSrc = $(this)[0].src;
    console.log(currentSrc);
    //var still = $(this)[0]["data-still"].value;
    console.log($(this)[0].attributes["data-still"].value);
    if ($(".gif").attr("data-still", data.images.fixed_height_still.url)) {
        $(".gif").attr("data-still", data.images.fixed_height.url);
    }
    else if ($(".gif").attr("data-still", data.images.fixed_height.url)) {
        $(".gif").attr("data-still", data.images.fixed_height_still.url)
    }
})
$("#buttons-view").on('click', "button" , handler);
$("button").on('click', handler);

});