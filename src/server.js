const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize SQLite database
const db = new sqlite3.Database(':memory:');

// Create tables for users and messages
db.serialize(() => {
    db.run("CREATE TABLE users (username TEXT PRIMARY KEY, password TEXT)");
    db.run("CREATE TABLE messages (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, message TEXT, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)");

    // Add a test user
    db.run("INSERT INTO users (username, password) VALUES ('testuser', 'password123')");
});

// Endpoint to authenticate user
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.get("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], (err, row) => {
        if (err) {
            res.status(500).send({ error: 'Database error' });
        } else if (row) {
            res.status(200).send({ message: 'Login successful' });
        } else {
            res.status(401).send({ error: 'Invalid credentials' });
        }
    });
});

// Endpoint to get messages
app.get('/messages', (req, res) => {
    db.all("SELECT * FROM messages ORDER BY timestamp ASC", [], (err, rows) => {
        if (err) {
            res.status(500).send({ error: 'Database error' });
        } else {
            res.status(200).json(rows);
        }
    });
});

// Endpoint to post a new message
app.post('/messages', (req, res) => {
    const { username, message } = req.body;

    db.run("INSERT INTO messages (username, message) VALUES (?, ?)", [username, message], function(err) {
        if (err) {
            res.status(500).send({ error: 'Database error' });
        } else {
            res.status(201).send({ message: 'Message posted', id: this.lastID });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
