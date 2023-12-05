const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database('recipeshare.db');

app.use(express.json());

// Serve static files (CSS, JS, images, etc.)
app.use('/static', express.static(path.join(__dirname, 'public')));

// Render HTML pages dynamically
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});


// Endpoint for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    if (row) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });
});

// Endpoint for user registration
app.post('/signup', (req, res) => {
  const { newUsername, newPassword } = req.body;

  db.run('INSERT INTO users (username, password) VALUES (?, ?)', [newUsername, newPassword], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({ message: 'User registered successfully', userId: this.lastID });
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
