// Select the elements
const jokeElement = document.getElementById('joke');
const jokeButton = document.getElementById('joke-btn');

// Function to fetch a joke
async function fetchJoke() {
  console.log("Fetching a joke...");
  try {
    // Fetch joke from API
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    console.log("API Response Status:", response.status);

    // Handle non-successful responses
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON data
    const data = await response.json();
    console.log("Joke fetched successfully:", data);

    // Display the joke
    jokeElement.textContent = `${data.setup} - ${data.punchline}`;
  } catch (error) {
    // Handle errors
    jokeElement.textContent = 'Oops! Failed to fetch a joke. Please try again.';
    console.error('Error fetching joke:', error);
  }
}

// Add event listener to the button
jokeButton.addEventListener('click', fetchJoke);
