var quotes = [
{quote:"Be yourself everyone else is already taken",
source:"Oscar Wilde",
tag:"Tag: Personality"},
  
{ quote: "Be the change that you wish to see in the world.",
source: "Mahatma Gandhi",
tag: "Tag: Humanity"},

{ quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
source:"Maya Angelou",
tag: "Tag: Personality"},

{ quote: "If you tell the truth, you don't have to remember anything.",
source: "Mark Twain",
tag: "Tag: Personality"},

{ quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
source: "Martin Luther King Jr.",
citation: "A Testament of Hope: The Essential Writings and Speeches ",
year: "1986",
tag: "Tag: Humanity"}
];

//Color Picker Function Bundle//
let pick = 0;
let k = 0;
const test1 = ['#FF851B','#0074D9','#7FDBFF','#39CCCC', '#3D9970', '#3AC162'];
function changeBackgroundFunction () {
while (k == pick){
  k = Math.floor(Math.random()*6); }
pick = k;
console.log(pick);
let bodyTag = document.querySelector('body');
bodyTag.style.backgroundColor = test1[pick];}
/////End/////

var i=0; j=0
function getRandomFunction(quotes) {
 while (j == i ) {
   j = Math.floor(Math.random()*quotes.length);
 }
 i = j;
 let selectedQuote = quotes[i];  
 return selectedQuote; }


function printQuote() {
 changeBackgroundFunction();
 let selected = getRandomFunction(quotes);
 a=document.querySelector('.quote-box');
 let html; 
 html = `<p class="quote">${selected.quote}</p> <p class="source">${selected.source}`;
 if (selected.citation){
 html += `<span class="citation">${selected.citation}</span>`; }
 if (selected.year){
 html += `<span class="year">${selected.year}</span>`; }
 html += `</p>`;
 if (selected.tag) {
 html += `<div class="tag">${selected.tag}</div>`; }
 a.innerHTML = html;
  }
 


var Timer = setInterval(printQuote,5000);


var myEvent = document.getElementById('load-quote');
myEvent.addEventListener("click",()=>{printQuote()});
