const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const bodyParser = require("body-parser");
const dotenv = require('dotenv');

dotenv.config();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(routes);

const MONGODB_URI =  process.env.DB_URL;
// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
