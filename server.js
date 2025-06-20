const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static('public'));

// Basic route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/grand-sereno-details', (req, res) => {
  res.sendFile(__dirname + '/public/grand-sereno-details.html');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
