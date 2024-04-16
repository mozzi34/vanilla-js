const quotes = [
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "In the end, it’s not the years in your life that count. It’s the life in your years.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison",
    },
    {
        quote: "If you spend too much time thinking about a thing, you’ll never get it done.",
        author: "Bruce Lee",
    },
    {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Despite the forecast, live like it’s spring.",
        author: "Lilly Pulitzer",
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain",
    },
    {
        quote: "There is always some madness in love. But there is also always some reason in madness.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "Love asks me no questions, and gives me endless support.",
        author: "William Shakespeare",
    },
    {
        quote: "To love and win is the best thing. To love and lose, is the next best thing.",
        author: "William Thackeray",
    }


];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;