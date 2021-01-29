const express = require('express');

const path = require('path');

const port = 8000;

const app = express();


app.set('view engine','ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded())

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

var contactsList = [
    {
        name:"Tanmay",
        phone:'1111111111'
    },
    {
        name:"Tejas",
        phone:'2222222222'
    },
    {
        name:"John",
        phone:'4444444444'
    }
]


app.get('/', function(req,res){

    return res.render('home', {
        title:'Contact List',
        contact_list: contactsList
    });

});

app.get('/prac', function(req,res){

    return res.render('prac', {
        title:'Contact List'
    } );

});


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
    contactsList.push(req.body);
    return res.redirect('back');
});



app.listen(port, function(err){
    if(err){ console.log('Error running the server', err); }
    
    console.log('Running on port: ', port);


});