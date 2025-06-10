const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "In the middle of every difficulty lies opportunity.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "The best way to predict the future is to create it.",
    "You miss 100% of the shots you don't take.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Act as if what you do makes a difference. It does.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Opportunities don't happen, you create them.",
    "Don't watch the clock; do what it does. Keep going.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, don't waste it living someone else's life.",
]

const usedIndexes = new Set()
const quoteTag = document.getElementById('quote')

function getNewQuote() {
    if (usedIndexes.size === quotes.length) {
        // Reset if all quotes have been used
        usedIndexes.clear()
    }

    while (true) {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        
        if (usedIndexes.has(randomIndex)) {
            continue; // Skip if this index has already been used
        }
        
        usedIndexes.add(randomIndex) // Mark this index as used
        const quote = quotes[randomIndex]
        quoteTag.innerHTML = quote;
        break
    }
}

getNewQuote()