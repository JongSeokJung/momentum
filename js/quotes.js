const quotes = [
    {
        quote: "Create what you want to use",
        author: "Steve Wozniak"
    },
    {
        quote: "Always do what you are afraid to do",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Challenges are what make life interesting and overcoming them is what makes life meaningfu",
        author: "Joshua J. Marine"
    },
    {
        quote: "Challenge yourself it's the only path which leads to growth",
        author: "Morgan Freeman"
    },
    {
        quote: "Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey",
        author: "Roy T. Bennett"
    },
    {
        quote: "When the going gets tough, put one foot in front of the other and just keep going. Don’t give up",
        author: "Roy T. Bennett"
    },
    {
        quote: "Every challenge you face today makes you stronger tomorrow. The challenge of life is intended to make you better, not bitter",
        author: "Roy T. Bennett"
    },
    {
        quote: "Rome was not built in a day",
        author: "John Heywood"
    },
    {
        quote: "Instead of letting the situation dictate our decisions, we must dictate the situation",
        author: "Jocko Willink"
    },
    {
        quote: "Stop checking social media and stop watching one more Youtube video",
        author: "Jocko Willink"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;