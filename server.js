// Minimal Express app for CSE Motors (Assignment 1)
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static assets
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'CSE Motors | Home' });
});

// Health check (useful for Render)
app.get('/health', (req, res) => res.send('ok'));

app.listen(PORT, () => {
  console.log(`CSE Motors running on http://localhost:${PORT}`);
});
