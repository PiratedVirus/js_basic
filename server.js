const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('API-UPDATE! Hello from prod edit! Its working, but this time it might fail on prod env because now i am checking with default values along with mongo db. Lets see if this commit reflects');
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

