// javascript file for login.html

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); //prevents the default form submission

        // get input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // list of usernames and passwords
        const credentials = [
            { username: 'user123', password: 'pass123' },
            { username: 'johndoe', password: 'janedoe'},
            { username: 'shane', password: 'letmein'}
        ];

        // check credentials
        const validCredential = credentials.find(cred => cred.username == username && cred.password == password);

        if (validCredential) {
            // redirect to home page if valid
            window.location.href = 'discovery.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});