const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// connect to MongoDb
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log(error));

app.get('/', (req, res) => {
    res.send('Hello world!')
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});
