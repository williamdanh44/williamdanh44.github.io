// Function to display a dynamic welcome message based on the time of day
function displayWelcomeMessage() {
    const now = new Date();
    const hour = now.getHours();
    let welcomeMessage;

    // Determine the time of day and set the welcome message
    if (hour < 12) {
        welcomeMessage = "Good Morning! Ready for an eco-adventure?";
    } else if (hour < 18) {
        welcomeMessage = "Good Afternoon! Plan your next green getaway!";
    } else {
        welcomeMessage = "Good Evening! Explore our sustainable travel options!";
    }

    // Display the message in the designated paragraph
    document.getElementById('welcome-message').innerText = welcomeMessage;
}

//Function to highlight all table rows
function highlightPackages() {
    const rows = document.querySelectorAll('#travel-packages tbody tr');
    rows.forEach(row => {
        row.style.backgroundColor = 'yellow'; // Highlight color
    });
}

document.getElementById('highlight-button').addEventListener('click', highlightPackages);

// Call the function when the page loads
window.onload = displayWelcomeMessage;