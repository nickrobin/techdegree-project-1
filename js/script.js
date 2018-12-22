/** Array of quote objects
quote:  (req,string) text of actual quote
source: (req,string) rapper/artist
year: (opt,int) year of lyric
citation: (opt,string) album/song lyric is from
category: (opt,string) categorization of lyric
**/

var quotes = [
{
quote: "You got pets? Me too: mines are dead, doggy. Fox, minks, gators, that's necessary Accessories, my closet's \"Pet Sematary\"",
source: "Cam'ron",
year: 2004,
citation: "Purple Haze Album",
category: "Flexing 💪"
},
{
quote: "Jesus died at age 33, there's thirty-three shots. From twin glocks there's sixteen apiece, that's thirty-two. Which means, one of my guns was holding 17. Twenty-seven hit your crew, six went into you",
source: "Nasir (Nas) Jones",
category: "Insightful 🧠"
},
{
quote: "Dirty soda in a styrofoam. Spend a day to get my mind blown. Dress it up and go to NASA. 200 Miles on the dash",
source: "Future",
citation: "March Maddness",
year: 2015
},
{
quote: "Alright, André my favorite rapper, raw paper, my favourite wrapper. All of these baby rappers starting to look like lady rappers",
source: "2 Chainz",
category: "Wordplay 🎭"
},
{
quote: "I'm so ahead of my time my parents haven't met yet",
source: "Big L",
citation: "Strech & Bobbito Freestyle"
},
{
quote: "I used to cut the porch lights on and now I cut the Porsche lights on, just to let em know their foresight's wrong",
source: "Drizzy Drake",
citation: "Still Drake ft. Trey Songz",
year: 2009,
category: "Flexing 💪"
}
]

/***
Checks the length of quote array and generates a number between 0 and the max length of array
RETURNS single instance of quote
***/
function getRandomQuote(){
  var upper = quotes.length
  var random = Math.floor(Math.random() * upper);
  console.log(random);
  return quotes[random];
}


/**
Get a random quote from our array of rap quotes and construct a htmlString using the quote and quote source (required fields)
Condition logic to check if there is extra fields such as citation, year, or category in the object
Update the quote-box div and change background color
**/
function printQuote() {
  var quote = getRandomQuote();
  var htmlString = '<p class="quote">' + quote.quote + '</p><p class="source">' + quote.source;
    if ('citation' in quote){
      htmlString = htmlString + '<span class="citation">' + quote.citation + '</span>';
    }
    if ('year' in quote){
      htmlString = htmlString + '<span class="year">' + quote.year + '</span>';
    }
    //extra credit: include an additional field here for category of bar 
    if ('category' in quote){
    htmlString = htmlString + '<br><span class="category"> Lyric Type:' + quote.category + '</span>';
    }
  //cap off html string with a closing paragraph tag
  htmlString = htmlString + '</p>';
  //Update value within quote-box div with newly created html string
  document.getElementById('quote-box').innerHTML = htmlString;

  /** extra credit: change the background color on new quote generation
  randomly create rgb(x,x,x) field **/
  var rgb_value = "rgb(" + Math.floor(Math.random() * 250) + "," + Math.floor(Math.random() * 250) + "," + Math.floor(Math.random() * 250) + ")";
  document.body.style.background = rgb_value;

}

 // extra credit: initalizate timer to change quote after 5 seconds
 var quoteTimer = window.setInterval(printQuote, 5000);

//onclick listener for the loadQuote button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
