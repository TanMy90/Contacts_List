//require express module
const express = require('express');

//require path module
const path = require('path');

//define port number
const port = 8000;

//require db config
const db = require('./config/mongoose');

//require contact db
const Contact = require('./models/contact');

//call express
const app = express();

//set view engine to ejs
app.set('view engine','ejs');

//set path to views folder
app.set('views', path.join(__dirname, 'views'));

//use express urlencode
app.use(express.urlencoded())

//set path to assets folder
app.use(express.static('assets'));

// //middleware1
// app.use(function(req,res,next){
//     console.log('middleware 1 called');
//     next();
// });

// //middleware2
// app.use(function(req,res,next){
//     console.log('middleware 2 called');
//     next();
// });

// var contactsList = [
//     {
//         name:"Tanmay",
//         phone:'987654321'
//     },
//     {
//         name:"Tejas",
//         phone:'987654321'
//     },
//     {
//         name:"John",
//         phone:'987654321'
//     }
// ]


//home page
//fetching data and displaying on the page
app.get('/', function(req,res){

    Contact.find({}, function(err, contacts){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }

        return res.render('home', {
            title:'Contact List',
            contact_list: contacts
        });

    });    

});



// app.get('/prac', function(req,res){

//     return res.render('prac', {
//         title:'Contact List'
//     } );

// });

//create new contact CRUD => C
app.post('/create-contact', function(req,res){
    // return res.redirect('/prac');
    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.phone);
    // contactsList.push({
    //         name:req.body.name,
    //         phone:req.body.phone
    //     });
    // return res.redirect('/');
    // contactsList.push(req.body);

    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function(err, newContact){
        if(err){
            console.log('error in creating a contact.');
            return;
        }

        console.log('***********', newContact);
        return res.redirect('back');
    });

    
});


//Delete existing contact CRUD => D
app.get('/delete-contact', function(req,res){

    //get the id from query in the url
    let id = req.query.id;

    //find the contact in db using id and delete it
    Contact.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in deleting the object');
            return;
        }

        return res.redirect('back');
    });

    
});


//listening on port
app.listen(port, function(err){
    if(err){ console.log('Error running the server', err); }
    
    console.log('Running on port: ', port);


});