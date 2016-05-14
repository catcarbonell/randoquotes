// Treehouse Random Quote Generator
// Author: Cat Carbonell (@catcarbonell)

// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Generate random quotes

// Global variable for quotes
var message = '';

 
// Find the element that will display the quote
 
function print(message) {     
        var output = document.getElementById('quote-container');
        output.innerHTML = message;
}   

// Get the random quote to be random
function getRandomQuote() {
        var quoteObject = quotes[Math.floor(Math.random() * quotes.length)];
        return quoteObject;
}

// "Physically" print the quote, source, and optional keys into the div
function printQuote() {
		var printObject = getRandomQuote();
        message += '<h1 class="quotes">' + printObject.quote + '</h1>';
        message += '<h3 class="source">' + printObject.source + '</h2>';
        if (printObject.citation !== undefined) {
                message += '<span class ="citation">' + printObject.citation + '</span>';
            }
        if (printObject.year !== undefined) {
                message += '<span class ="year"> ' + printObject.year + '</span>';
            }
        message += '</p>';
        print(message);
        message = '';
        //var getRandomColors = RandomColors();
	    //document.body.style.backgroundColor = getRandomColors;
}

// Generate random background color