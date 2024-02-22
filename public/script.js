// Existing code for form handling
document.getElementById('caseForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission to server

    // Get values from inputs
    const dateEntered = document.getElementById('dateEntered').value;
    const caseNumber = document.getElementById('caseNumber').value;
    const caseLink = document.getElementById('caseLink').value;

    // Create list item
    const listItem = document.createElement('li');
    listItem.textContent = `Date Entered: ${dateEntered}, Case Number: ${caseNumber}, Link: ${caseLink}`;

    // Append to list
    document.getElementById('casesList').appendChild(listItem);

    // Reset form
    this.reset();
});

// Function to display Philippine Time
function displayPhilippineTime() {
    const phTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" });
    document.getElementById('ph-time').textContent = phTime;
}

// Display the time immediately and then update every minute
displayPhilippineTime();
setInterval(displayPhilippineTime, 60000);
