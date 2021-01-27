const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('Hello express');
});

mongoose.connect(
    process.env.DB_CONNECTION, {useNewUrlParser: true}, () => {
    console.log('connected to DB!')
});

app.listen(process.env.PORT || 3000);