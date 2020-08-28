const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database.js');

const app = express(); 

// Setting up view-engine as handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// BodyParse
app.use(express.urlencoded({extended: false}));

// Creating static folder
app.use(express.static(path.join(__dirname, 'public')));

// Authenticating with the database
db.authenticate()
.then(() => console.log('Database Connected'))
.catch(err => console.log(`Error: ${err}`));

// Get route for app.js
app.get('/', (req, res) => res.render("index", {layout: 'landing'}));

//gigs route for app.js
app.use('/gigs/', require('./routes/gigs'));

// Port initialization and listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Running at http://localhost:${PORT}`));

