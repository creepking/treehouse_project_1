/******************************************
chosen quotes and sources from Parade website
***/

var quotes= [

      {
        quoteOne: '“Never be limited by other people\’s limited imaginations."',
        sourceOne: '<br>' + "-Dr. Mae Jemison, first African-American female astronaut"
      },

      {
        quoteTwo: '“The cost of liberty is less than the price of repression."',
        sourceTwo: '<br>' + "-W.E.B. Du Bois"

      },

      {
        quoteThree: '“Hate is too great a burden to bear. It injures the hater more than it injures the hated.”',
        sourceThree: '<br>'+"-Coretta Scott King"
      },

      {
        quoteFour: '“Whatever we believe about ourselves and our ability comes true for us.”',
        sourceFour: '<br>' + "-Susan L. Taylor, journalist"
      },

      {
        quoteFive: '“If there is no struggle, there is no progress.”',
        sourceFive: '<br>' + "-Frederick Douglass"
      }

];

// getRandomQuote function calculates a random number between 1 and 5, then
// selects a quote with the corresponding spot in the array.

function getRandomQuote() {

  var randomNumber=Math.floor(Math.random()*quotes.length);
      if (randomNumber==1) {
        return quotes[0].quoteOne + " " + quotes[0].sourceOne;
      }

  else if (randomNumber==2) {
        return quotes[1].quoteTwo + "  " + quotes[1].sourceTwo;
      }

  else if (randomNumber==3) {
        return quotes[2].quoteThree + "  " + quotes[2].sourceThree;
      }

  else if (randomNumber==4) {
        return quotes[3].quoteFour + "  " + quotes[3].sourceFour;
      }

  else {
        return quotes[4].quoteFive + "  " + quotes[4].sourceFive;
      }


}




/***
  The printQuote function calls the getRandomQuote function and gives it the
  variable name chosenQuote, then adds the result to the innerHTML "quote-box"
***/

function printQuote(){
  chosenQuote=getRandomQuote();
  document.getElementById("quote-box").innerHTML = chosenQuote;
  return chosenQuote;
}




/***
  the event listener below invokes the printQuote function when the button is
  clicked, changing the quote based on the randomly generated result.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
