const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contact');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', contactRoutes);

// 👇 This route keeps the backend awake when pinged
app.get('/api/ping', (req, res) => {
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
