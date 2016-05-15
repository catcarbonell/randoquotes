// Treehouse Random Quote Generator


// event listener to respond to clicks on the page

var startQuote = function(){ printRandomQuote(quotes)}

document.getElementById('loadQuote').addEventListener("click", startQuote, false);

document.getElementById('streamQuote').addEventListener("click", streamQuote, false);

document.getElementById('stopStream').addEventListener("click", stopStream, false);

// Getting the class elements labeled 'tagged'
var taggedClassObj = document.getElementsByClassName('tagged');


//console.log(taggedClassObj);
var tagListener = function(){
    var mytag = this.getAttribute('id');
    getTaggedQuotes(mytag); 
}
// Creating a for-loop event listener for all elements labeled 'tagged'
for (var y = 0; y < taggedClassObj.length; y++){

    //console.log(taggedClassObj[y].id);

    var tagObj = taggedClassObj[y];

    tagObj.addEventListener("click", tagListener, false);
}


// Generate random quotes

// Global variable for quotes
var message = '';

 
// Find the element that will display the quote
 
function print(message) {     
        var output = document.getElementById('quote-container');
        output.innerHTML = message;
}   

// Get the random quote to be random
function getRandomQuote(quotesarray) {
        
        var quoteObject = quotesarray[Math.floor(Math.random() * quotesarray.length)];
        //console.log(quotesarray)
        //console.log(quotes.length);

        return quoteObject;
}

// "Physically" print the quote, source, and optional keys into the div
function printRandomQuote(quotearray) {

		var printObject = getRandomQuote(quotearray);
        message = '<h1 class="quotes">' + printObject.quote + '</h1>';
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
       

}

function getTaggedQuotes(mytag) {

    var taggedArray = [];

    for ( var x = 0; x < quotes.length; x++) // Loop through each object in quotes (for each object(x) in quotes)...
    {   
            
            var tagged = quotes[x].tags; // Label for tags

            if (tagged == mytag) { // if the tag matches 'mytag' from tagListener

                taggedArray.push(quotes[x]) //push the quote to taggedArray

            }
            
    }

    printRandomQuote(taggedArray);

}

// Interval Quote Stream

// Start with a blank slate...
var interval = '';

// The function called when clicked
function streamQuote() { 

    function foo() {
        // print random quote!
        printRandomQuote(quotes);
    }
    console.log('start');
   interval = setInterval(foo, 9001);

    }

// STAHP.
function stopStream(){
    console.log('stop');
     clearInterval(interval);
}

