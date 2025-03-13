const express = require('express');
const app = express();
app.use(express.json());

// Sample route
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // Authenticate user logic
    res.send("User authenticated");
});
