// Function to fetch a random quote from the web service
async function fetchRandomQuote() {
    try {
      let response = await fetch('https://thatsthespir.it/api');
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      let data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch quote');
    }
  }

  // Function to display the quote on the page
  function displayQuote(quote) {
    let quoteContainer = document.getElementById('quoteContainer');
    //let picAuthorContainer = document.getElementById('picAuthorContainer');
    
    quoteContainer.innerHTML = `
      <div class="quote">
        <h3>" ${quote.quote} "</h3>
        <span>"${quote.author}"</span>
        <img class="picAuthorContainer" src="${quote.photo}"}
      </div>
    `;
  }

  // Function to handle button click event
  async function generateQuote() {
    try {
      let quote = await fetchRandomQuote();
      displayQuote(quote);
    } catch (error) {
      let quoteContainer = document.getElementById('quoteContainer');
      quoteContainer.innerHTML = `
        <div class="quote">
          <p>Error: ${error.message}</p>
        </div>
      `;
    }
  }

  // Add event listener to the generate button
  let generateButton = document.getElementById('generateButton');
  generateButton.addEventListener('click', generateQuote);

  // Generate the initial quote
  generateQuote();
