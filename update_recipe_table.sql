DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    ingredients TEXT,
    instructions TEXT,
    photo TEXT, -- Add a field to store the image URL
    userId INTEGER,
    FOREIGN KEY(userId) REFERENCES users(id)
);