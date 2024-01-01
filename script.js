// your_script.js

// Define an array of changing texts
var changingTexts = ["Website", "Portfolio", "Blog"];

// Get the welcomeMessage element
var welcomeMessageElement = document.getElementById("classifier");

// Set an index to track the current changing text
var currentIndex = 0;

// Function to update the welcome message
function updateWelcomeMessage() {
    // Combine the changing text with a fixed welcome message
    var welcomeMessage = "" + changingTexts[currentIndex] ;

    // Update the welcomeMessage element with the generated message
    welcomeMessageElement.textContent = welcomeMessage;

    // Increment the index or reset to 0 if it reaches the end of the array
    currentIndex = (currentIndex + 1) % changingTexts.length;
}

// Call the updateWelcomeMessage function initially
updateWelcomeMessage();

// Set an interval to update the welcome message every 3 seconds (adjust as needed)
setInterval(updateWelcomeMessage, 3000);