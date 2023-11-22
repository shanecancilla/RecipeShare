document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Perform a fetch to check the credentials
    fetch('/backend/checkCredentials.txt')
      .then(response => response.text())
      .then(data => {
        const credentials = data.split('\n').map(line => line.split(','));
        const found = credentials.some(cred => cred[0] === username && cred[1] === password);
        if (found) {
          window.location.href = '/display.html'; // Redirect to display.html on successful login
        } else {
          document.getElementById('error-message').textContent = 'Invalid username or password. Please try again.';
        }
      })
      .catch(error => {
        console.error('Error fetching credentials:', error);
        document.getElementById('error-message').textContent = 'Error fetching credentials. Please try again later.';
      });
  });
  