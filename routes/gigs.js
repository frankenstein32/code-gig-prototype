const express = require('express');
const db = require('../config/database');
const Gig = require('../models/Gig');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// get Route
router.get('/', (req, res) => {
    Gig.findAll()
    .then(gigs => {
        res.render('gigs', {gigs});
    })
    .catch(err => console.log(`Error: ${err}`));
});

// get route to add data
router.get('/add',(req, res) => res.render("add"));

// Middleware to add values in db
router.post('/add',(req, res) => {
    let {title, technologies, description, budget, contact_email} = req.body;

    let errors = []

    if(!title){
        errors.push({text: 'Please enter the title before proceeding!!!'});
    }

    if(!technologies){
        errors.push({text: 'Please enter the technologies before proceeding!!!'});
    }

    if(!description){
        errors.push({text: 'Please enter the description before proceeding!!!'});
    }

    if(!contact_email){
        errors.push({text: 'Please enter the contact_email before proceeding!!!'});
    }

    if(errors.length > 0){

        res.render("add", {
            errors,
            title,
            description,
            technologies,
            budget,
            contact_email
        });

    }else{

        if(!budget){
            budget = 'Unknown';
        }else{
            budget = `${budget} Rs`
        }

        technologies = technologies.toLowerCase().replace(/, /g, ',');
        console.log(technologies);

        Gig.create({
            title,
            technologies,
            description,
            budget,
            contact_email
        })
        .then(gig => res.redirect('/gigs'))
        .catch(err => console.log(`Error: ${err}`));
    }
});

router.get('/search', (req, res) => {

    let { term } = req.query;
    term = term.toLowerCase();

    Gig.findAll({ where : { technologies: {[Op.like]: `%${term}%`}}})
    .then(gigs => res.render('gigs', {gigs}))
    .catch(err => res.render('error', {error: err}));
});


module.exports = router;

