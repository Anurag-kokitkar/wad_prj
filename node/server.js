const express = require('express');

const app = express();

const PORT = 3000;

// Serve Static Files
app.use(express.static(__dirname));

// Home Route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});