const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

app.get("/posts", (req, res) => {
    fs.readFile(path.join(__dirname, "data", "post.json"), "utf8", (err, data) => {
        if (err) {
            res.status(500).json({ error: "Error reading the file" });
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});