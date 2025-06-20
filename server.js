const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const villas = [
  { id: 1, name: 'Grand Sereno', location: 'Siolim', price: '2.5 Cr', phone: '+919897070228' },
  { id: 2, name: 'Casa Tropica', location: 'Assagao', price: '3.1 Cr', phone: '+919897070228' }
];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/villas', (req, res) => {
  res.json(villas);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
