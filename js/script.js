/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/

var quotes= [
      {
        quote1: '“Never be limited by other people’s limited imaginations.”',
        source1: "Dr. Mae Jemison, first African-American female astronaut"
},
      {
        quote2: '“The cost of liberty is less than the price of repression."',
        source2: "—W.E.B. Du Bois",

      },
      {
        quote3: '“Hate is too great a burden to bear. It injures the hater more than it injures the hated.”',
        source3: "—Coretta Scott King"
      },

      {
        quote4: '“Whatever we believe about ourselves and our ability comes true for us.” ',
        source4: "—Susan L. Taylor, journalist"
      },

      {
        quote5: '“If there is no struggle, there is no progress.” ',
        source5: "—Frederick Douglass"
      }

];


/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

var quotes= [

      {
        quoteOne: '“Never be limited by other people\’s limited imaginations."',
        sourceOne: "-Dr. Mae Jemison, first African-American female astronaut"
      },

      {
        quoteTwo: '“The cost of liberty is less than the price of repression."',
        sourceTwo: "-W.E.B. Du Bois"

      },

      {
        quoteThree: '“Hate is too great a burden to bear. It injures the hater more than it injures the hated.”',
        sourceThree: "-Coretta Scott King"
      },

      {
        quoteFour: '“Whatever we believe about ourselves and our ability comes true for us.”',
        sourceFour: "-Susan L. Taylor, journalist"
      },

      {
        quoteFive: '“If there is no struggle, there is no progress.”',
        sourceFive: "-Frederick Douglass"
      }

];

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
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote(){
  chosenQuote=getRandomQuote();
  document.getElementById("quote-box").innerHTML = chosenQuote;
  return chosenQuote;
}




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
