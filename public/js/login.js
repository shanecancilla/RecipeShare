// login.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Login successful') {
          window.location.href = 'homepage.html';
        } else {
          alert('Invalid username or password. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
  });