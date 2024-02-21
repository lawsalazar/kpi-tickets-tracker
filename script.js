document.getElementById('caseForm').addEventListener('submit', function(e) {
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
