const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database.js');

const app = express();

db.authenticate()
.then(() => console.log('Database Connected'))
.catch(err => console.log(`Error: ${err}`));

app.get('/', (req, res) => {
    res.send("Code-Gig");
});

app.use('/gigs/', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Running at http://localhost:${PORT}`));

