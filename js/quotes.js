
const quotes = [
    {
        quote: "Don't dwell on the past.",
        korquote: "과거에 연연하지 마세요."
    },
    {
        quote: "Believe in yourself",
        korquote: "자기 자신을 믿으세요."
    },
    {
        quote: "Follow your heart.",
        korquote: "마음이 원하는 대로 따르세요."
    },
    {
        quote: "Seize the day.",
        korquote: "오늘을 즐기세요."
    },
    {
        quote: "You only live once.",
        korquote: "인생은 한 번 뿐이에요."
    },
    {
        quote: "Past is just past.",
        korquote: "과거는 과거입니다."
    },
    {
        quote: "Love yourself.",
        korquote: "자기 자신을 사랑하세요."
    },
    {
        quote: "Where there is a will there is a way.",
        korquote: "뜻이 있는 곳엔 길이 있다."
    },
    {
        quote: "Don't beat yourself up.",
        korquote: "자책하지 마세요."
    },
    {
        quote: "Life is a journey.",
        korquote: "인생은 여정이다."
    },








];

const quote = document.querySelector("#quote span:first-child");
const korquote = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];



quote.innerText = todaysQuote.quote;
korquote.innerText = todaysQuote.korquote;