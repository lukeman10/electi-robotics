// The API endpoint URL for a specific Pokémon
const apiUrl = 'https://api.humorapi.com/jokes/random';

// Get the HTML element where we want to display the data
const pokemonNameElement = document.getElementById('pokemon-name');

// Use the fetch() API to make a GET request
fetch(apiUrl)
    .then(response => {
        // Check if the response was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the JSON data from the response
        return response.json();
    })
    .then(data => {
        // Access the data and update the HTML element
        pokemonNameElement.textContent = `Info: ${data.name}`;
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
        pokemonNameElement.textContent = 'Failed to load data.';
    });
