// JavaScript file for Sign Up page (signup.js)

document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById('signupForm');

  signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get input values
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Simulate appending new user to a list (replace this with your logic)
    // Here, we're just logging the new user details
    console.log('New Username:', newUsername);
    console.log('New Password:', newPassword);

    // Redirect to Home Page after successful sign up
    window.location.href = 'homepage.html';
  });
});
