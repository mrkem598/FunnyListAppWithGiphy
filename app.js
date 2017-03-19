var professionals = ["teachers",'nurses','doctors','developers','plumbers','farmers','polices','drivers','enginers','bellmans','chefs','politicians','artists','lawyers','architect'];
   var prof; 
function addLinks () {
  for (var i = 0; i < professionals.length; i++) {
    link = document.createElement("button");
    link.textContent = professionals[i];
    link.className = "professionals";
    document.body.appendChild(link);
    
  };
};

addLinks();

$(".professionals").click(function() {
	var prof = this.value()?
console.log(this = );
}); = 

var queryURL = "http://www.giphy.com/gifs=" + prof + "&y=&plot=short&r=json";


 $.ajax({
           url: queryURL,
	
           method: "GET"
         }).done(function(response) {
           $("#a").text(JSON.stringify(response));
         });






   