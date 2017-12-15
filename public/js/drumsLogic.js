// Code here handles what how the page displays all of the drums
// It pings the server. The server then pings the database and displays all of the drums I Like. 

console.log("Hello Drums Logic");
// grab the current URL of the page
var currentURL = window.location.origin;

// log the currentURL of the page, and add /api, 
// showing the url we'll be making our get request to
console.log(currentURL + "/api/");

// make a get request to our api to grab every character
$.get(currentURL + "/api/", function(data){

	// for each character that our server sends us back
	for (var i =0; i < data.length; i++){
		// create a parent div for the oncoming elements
		var wellSection = $("<div>");
		// add a class to this div: 'well'
		wellSection.addClass('well');
		// add an id to the well to mark which well it is
		wellSection.attr('id', 'characterWell-' + i)
		// append the well to the well section
		$('#wellSection').append(wellSection);				

		// Now add all of our chacter data to the well we just placed on the page
		
		// make the name an h2,
		$("#characterWell-" + i).append("<h2>" + data[i].brand + "</h2>");
		// the brand an h3,
		$("#characterWell-" + i).append("<h3>Role: " + data[i].name + "</h4>");
		// the name an h3,
		$("#characterWell-" + i).append("<h3>Age: " + data[i].diameter + "</h4>");
		// and the diameter an h3.
		$("#characterWell-" + i).append("<h3>Force Points: " + data[i].model+ "</h4>");	
		// and the price an h3.
		$("#characterWell-" + i).append("<h3>Force Points: " + data[i].price+ "</h4>");	
	}
})