const express = require('express');
const db = require('../config/database');
const Gig = require('../models/Gig');
const router = express.Router();

// get Route
router.get('/', (req, res) => {
    Gig.findAll()
    .then(gigs => {
        // var obj = gigs[1];
        // console.log("-------------");
        // console.log({obj});
        // console.log("-------------");
        res.render('gigs', {gigs});
    })
    .catch(err => console.log(`Error: ${err}`));
});

// Middleware to add values in db
router.use('/add/',(req, res) => {

    const data = {
        title: 'Demo-title-5',
        technologies: 'Demo5.js',
        description: `This is a demp description and hence it will not make 
        any sense but still try to understand the aim behind writing this 
        useless piece of para`,
        budget: '655200 Rs',
        contact_email: 'demo5@gmail.com'
    };

    let {title, technologies, description, budget, contact_email} = data;

    Gig.create({
        title,
        technologies,
        description,
        budget,
        contact_email
    })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(`Error: ${err}`));
});


module.exports = router;

