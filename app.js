// once the document is ready do the following function
$(document).ready(function() {
    var list = [];

  //creating click function to accept user input(click)
  $("button").on("click", function() {
    
    var professionals = $(this).data("name");
    //declaring the queryUrl
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + professionals + "&api_key=dc6zaTOxFJmzC&limit=10";
    // // performing an a aJax get request to the queryURL
    $.ajax({
    	url: queryURL,
    	method: "GET"
    })
    // After the data from the AJAX request comes back 
    .done(function(response) {

    	//console.log(response);

    	var results = response.data;

    	for(var i = 0; i < results.length; i++) {
    		var professionalsDiv = $("<div/>");
    		var p = $("<p/>");
    		p.text(results[i].rating);
    		var professionalsImage = $("<img/>");
    		professionalsImage.addClass("anImg");
    		professionalsImage.attr("src", results[i].images.fixed_height.url);
    		professionalsImage.attr("data-still", results[i].images.fixed_height_still.url)
    		professionalsImage.attr("data-animate", results[i].images.fixed_height.url)
    		.attr("data-state", "still");
    		professionalsDiv.append(p);
    		professionalsDiv.append(professionalsImage);
    		professionalsDiv.prependTo($("#prof"));
    	}
    	$(".anImg").on("click", function(){
    		var state = $(this).attr("data-state");
    		console.log(this);
    		if(state == "still") {
    			$(this).attr("src", $(this).data("animate"));
    			$(this).attr("data-state", "animate");
    		}else{
    			$(this).attr("src", $(this).data("still"));
    			$(this).attr("data-state", "still");
    		}
    	});
         
 
    });

});

  var profession = [""];
  // adding the buttons with a click function
  $("#theButton").on("click", function() {
  	var professionalsbutton = $("#gif-input").val();
    //adding the new professionals
    var newButton = $("<button/>").addClass("btn btn-info Professional").attr("data-name", professionalsbutton).html(professionalsbutton);
    $("#professionalsbutton").append(newButton);
    //console.log("work");
    queryURL = "https://api.giphy.com/v1/gifs/search?q=" + professionalsbutton + "&api_key=dc6zaTOxFJmzC&limit=10";
    //ajax call to get the data from the url address
    $.ajax({
    	url: queryURL,
    	method: "GET"
    }).done(function(response) {
    	var results = response.data;
    	for(var i = 0; i< results.length; i++) {
    		var professionalsDiv = $("<div/>");
    		var p = $("<p/>");
    		p.text(results[i].rating);
    		var professionalsImage = $("<img/>");
    		professionalsImage.addClass('anImg')
    		professionalsImage.attr('src', results[i].images.fixed_height_still.url);
    		professionalsImage.attr('data-still', results[i].images.fixed_height_still.url)
    		professionalsImage.attr('data-animate', results[i].images.fixed_height.url)
    		.attr('data-state', 'still');
    		professionalsDiv.append(p);
    		professionalsDiv.append(professionalsImage);
    		professionalsDiv.prependTo($('#gifs'));
    	}

    	$('.anImg').on('click', function() {

    		var state = $(this).attr('data-state'); 
    		console.log(this);
    		if (state == 'still') {
    			$(this).attr('src', $(this).data('animate'));

    			$(this).attr('data-state', 'animate');
    		} else {

    			$(this).attr('src', $(this).data('still'));

    			$(this).attr('data-state', 'still');
    		}      
    	});
    });

    $("#gif-input").val("");
    return false;
})
});

