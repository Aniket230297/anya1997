// Retrieve the DOM elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginBtn");

// Add event listener to the login button
loginButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve entered email and password
  const enteredEmail = emailInput.value;
  const enteredPassword = passwordInput.value;

  // Retrieve stored email and password from local storage
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  // Check if entered email and password match the stored values
  if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
    // Display success message for successful login
    alert("Login successful!");
    window.location.href = "../shoppingcart/cart.html";
  } else {
    // Display error message for incorrect email or password
    alert("Invalid email or password. Please try again.");
  }

  

  // Reset the form
  emailInput.value = "";
  passwordInput.value = "";
});
