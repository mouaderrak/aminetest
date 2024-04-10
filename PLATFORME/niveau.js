// Get the select element
const educationSelect = document.getElementById('education-level');

// Add event listener for change event
educationSelect.addEventListener('change', function() {
    // Get the selected value
    const selectedValue = this.value;
    
    // Display the selected value (you can customize this behavior)
    alert('Selected Education Level: ' + selectedValue);
});
