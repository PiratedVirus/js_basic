const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Hello from git via jenkins! Its working, but this time it might fail on prod env because now i am checking with default values');
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;

    // Create a new database named "mydatabase"
    const dbo = db.db("mydatabase");

    console.log("Database created!");
    db.close();
});
