const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Its working, but this time it might fail on prod env because now i am checking with default values along with mongo db');
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

