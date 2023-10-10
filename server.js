const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Hello from git via jenkins! Its working, but this time it might fail');
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
