const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database('recipeshare.db');

const multer = require('multer');

// Storage configuration for multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/images'); // Store images in the 'public/images' directory
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Rename the file with a unique name
  }
});

const upload = multer({ 
  storage: storage 
});

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

// Endpoint to fetch recipe data for the homepage
app.get('/recipes', (req, res) => {
  db.all('SELECT id, title, photo FROM recipes', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({ recipes: rows });
  });
});

// Endpoint for recipe submission with image upload
app.post('/submitrecipe', upload.single('imageUpload'), (req, res) => {
  const { title, ingredients, instructions, mealType } = req.body;
  const imageFilename = req.file.filename; // Multer renames the file and adds 'filename' to 'req.file'

  // Construct the image URL 
  const imageUrl = `http://localhost:3000/static/images/${imageFilename}`;

  // Insert new recipe into the database with the image URL
  db.run(
    'INSERT INTO recipes (title, ingredients, instructions, mealType, photo) VALUES (?, ?, ?, ?, ?)',
    [title, ingredients, instructions, mealType, imageUrl],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.json({ message: 'Recipe submitted successfully', recipeId: this.lastID });
    }
  );
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
