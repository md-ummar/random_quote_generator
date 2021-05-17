"use strict";

let quoteTest = [
    'The Best Way To Get Started Is To Quit Talking And Begin Doing.',
    'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty',
    'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.',
    'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.',
    'If people are doubting how far you can go, go so far that you can’t hear them anymore.',
    'If something is important enough, even if the odds are stacked against you, you should still do it',
    'No one is to blame for your future situation but yourself. If you want to be successful, then become “Successful.”',
    'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on',
    'If opportunity doesn\’t knock, build a door.'


]

let author = [
    'Walt Disney',' Winston Churchill','james','Steve Jobs','Michele Ruiz',' Elon Musk',
    ' Roy T. Bennett', ' Sheryl Sandberg','Kurt Cobain'
]

function newQuote() 
{
    let ranNumber = Math.floor(Math.random() * quoteTest.length );
    let quote = document.getElementById('text');
    let authName = document.getElementById('author');
    quote.innerHTML= quoteTest[ranNumber];
    authName.innerHTML = author[ranNumber];
    console.log(quoteTest[ranNumber]);
    
}

