//creating an array of professionals of Giphy api
var professionals = ["Teachers",'Nurses','Doctors','developers','plumbers','farmers','polices','drivers','enginers','bellmans','chefs','politicians','artists','lawyers','architect'];
var prof; 

// Using a for loop to create buttons for each array of professionals listed above
// Also adding a link features to each buttons
function addLinks () {
  for (var i = 0; i < professionals.length; i++) {
    link = document.createElement("button");
    link.textContent = professionals[i];
    link.className = "professionals";
    document.body.appendChild(link);
    
  };
};

addLinks();
// Creating a click function for each buttons 
$(".professionals").click(function(){
  // this keyword reffers to the button that was cliked
	var prof = $(this).attr("professionals");
 /* var queryURL = this.value();*/
 /*console.log(this = prof);*/
}); 
// constructing URL to search for professionals
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + prof + "&api_key=dc6zaTOxFJmzC&limit=10";

// performing an a aJax get request to the queryURL
$.ajax({
  url: queryURL,
  method: "GET"
})
// After the data from the AJAX request comes back 
.done(function(response) {
  // 
 $("#a").text(JSON.stringify(response));
});
 gifDiv.append("#a");
 
// Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
$("").append(gifDiv);

// Adding stop and play function to each giphy






