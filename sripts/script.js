// Prevent the form from submitting... remember
document.getElementById("akanForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
// Get user input
const birthday = new Date(document.getElementById("birthday").value);
const gender = document.getElementById("gender").value; 

// Validate input..This is imprtant
if (!birthday || isNaN(birthday.getTime())) {
    alert("Please enter a valid date.");
    return;
  }

// Get the day of the week
const dayOfWeek = calculateDayOfWeek(birthday);

// Get the Akan name
const akanName = getAkanName(dayOfWeek,gender);

