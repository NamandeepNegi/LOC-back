// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/location', (req, res) => {
  const { latitude, longitude } = req.body;
  console.log(`Received location: Latitude = ${latitude}, Longitude = ${longitude}`);
  res.status(200).send('Location received');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
