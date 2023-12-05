// signup.js

document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById('signupForm');

  signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newUsername, newPassword })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'User registered successfully') {
        alert('User registered successfully');
        window.location.href = 'index.html';
      } else {
        alert('Error registering user. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error registering user. Please try again.');
    });
  });
});

