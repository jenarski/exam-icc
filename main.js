//
// Place any custom JS here
//
async function getThreeRandomQuotes() {
    try {
        const response = await fetch('https://quote-garden.onrender.com/api/v3/quotes');
        const data = await response.json();
        
        // Get 3 random quotes
        const quotes = data.data;
        const randomQuotes = [];
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            randomQuotes.push(quotes[randomIndex]);
        }
        
        // Display the quotes
        randomQuotes.forEach((quote, index) => {
            const quotes = document.getElementsByClassName("quotes-main")[index];
            quotes.textContent = `"${quote.quoteText}"`;
            const author = document.getElementsByClassName("quotes-author")[index];
            author.textContent = `- ${quote.quoteAuthor}`;
            console.log(`Quote ${index + 1}:`);
            console.log(`"${quote.quoteText}"`);
            console.log(`- ${quote.quoteAuthor}`);
            console.log('\n');
        });
    } catch (error) {
        console.error('Error fetching quotes:', error);
    }
}

// Call the function to get three random quotes
getThreeRandomQuotes();