/******************************************
chosen quotes and sources from Parade website
***/

var quotes= [

      {
        quote: '“Never be limited by other people\’s limited imaginations."',
        source:"Dr. Mae Jemison, first African-American female astronaut"
      },

      {
        quote: '“The cost of liberty is less than the price of repression."',
        source: "W.E.B. Du Bois"

      },

      {
        quote: '“Hate is too great a burden to bear. It injures the hater more than it injures the hated.”',
        source: "Coretta Scott King"
      },

      {
        quote: '“Whatever we believe about ourselves and our ability comes true for us.”',
        source: "Susan L. Taylor, journalist"
      },

      {
        quote: '“If there is no struggle, there is no progress.”',
        source: "Frederick Douglass"
      }

];

// getRandomQuote function calculates a random number between 1 and 5, then
// selects a quote with the corresponding spot in the array.

function getRandomQuote(quoteSelection) {
var randomNumber=Math.floor(Math.random()*quotes.length);
  for (i=0; i<quotes.length; i++) {
    var randomQuote=quoteSelection[randomNumber];
  }
  return randomQuote;
}

/***
  The printQuote function calls the getRandomQuote function and gives it the
  variable name chosenQuote, then adds the result to the innerHTML "quote-box"
***/

function printQuote(){
  var message = " ";
  var chosenQuote= getRandomQuote(quotes);
  message= "<p class='quote'>" + chosenQuote.quote + "</p>";
  message+= "<p class='source'>" + chosenQuote.source;
  message+="</p>";

  document.getElementById("quote-box").innerHTML = message;
}

printQuote();

/***
  the event listener below invokes the printQuote function when the button is
  clicked, changing the quote based on the randomly generated result.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
