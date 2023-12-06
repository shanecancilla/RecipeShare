-- create_tables.sql

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
);

CREATE TABLE recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    ingredients TEXT,
    instructions TEXT,
    photo TEXT, -- Add a field to store the image URL
    userId INTEGER,
    FOREIGN KEY(userId) REFERENCES users(id)
);

