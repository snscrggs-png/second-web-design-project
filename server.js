const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// 1. Tell Node.js to serve your HTML, CSS, and Frontend JS from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// 2. A simple mock login endpoint
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    
    // For a mock site, let's just accept any password that is 'password123'
    if (password === 'password123') {
        res.json({ success: true, message: `Welcome back, ${email}!` });
    } else {
        res.status(401).json({ success: false, message: 'Wrong password! Try password123' });
    }
});

// Start the server
app.listen(3000, () => console.log('Website running at http://localhost:3000'));
