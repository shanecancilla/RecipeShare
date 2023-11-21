document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
  
    // Perform a fetch to append the new credentials to the file
    fetch('appendCredentials.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: newUsername,
        password: newPassword
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        document.getElementById('success-message').textContent = 'Signup successful! You can now login.';
        document.getElementById('error-message').textContent = '';
      } else {
        document.getElementById('error-message').textContent = 'Error: ' + data.message;
        document.getElementById('success-message').textContent = '';
      }
    })
    .catch(error => {
      console.error('Error appending credentials:', error);
      document.getElementById('error-message').textContent = 'Error appending credentials. Please try again later.';
      document.getElementById('success-message').textContent = '';
    });
  });
  