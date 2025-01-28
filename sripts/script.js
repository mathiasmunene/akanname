// Event Listener for Form Submission
// Prevent the form from submitting... remember
document.getElementById("akanForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
// Get user input
const birthday = new Date(document.getElementById("birthday").value);
const gender = document.getElementById("gender").value; 

// Validate input..This is imprtant. If not, 
// it alerts the user and stops further execution.
if (!birthday || isNaN(birthday.getTime())) {
    alert("Please enter a valid date.");
    return;
  }

// Calls the calculateDayOfWeek function to determine 
// the day of the week for the given date.
const dayOfWeek = calculateDayOfWeek(birthday);

// Get the Akan name. Calls the getAkanName function 
// to find the corresponding Akan name based on the day 
// of the week and gender.
const akanName = getAkanName(dayOfWeek,gender);

//Displays the Akan name in the #result element.
document.getElementById("result").innerText = `Your Akan name is ${akanName}!`;
});

function calculateDayOfWeek(date) {
  const CC = Math.floor(date.getFullYear() / 100);
  const YY = date.getFullYear() % 100;
  const MM = date.getMonth() + 1; // bse mnths are 0-indexed in js
  const DD = date.getDate();

  const dayOfWeek = (
    (Math.floor(CC / 4) - 2 * CC - 1) +
    (Math.floor(5 * YY / 4)) +
    (Math.floor(26 * (MM + 1) / 10)) +
    DD
  ) % 7;

  return dayOfWeek < 0 ? dayOfWeek + 7 : dayOfWeek; // Ensure positive result
}

//This function maps the day of the week to the 
// corresponding Akan name based on the user's gender.
function getAkanName(dayOfWeek, gender) {
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
    return gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
  }
