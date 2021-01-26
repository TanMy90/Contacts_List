const express = require('express');

const path = require('path');

const port = 8000;

const app = express();


app.set('view engine','ejs');

app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req,res){

    return res.render('home', {title:'Contact List'} );

});

app.get('/prac', function(req,res){

    return res.render('prac', {
        title:'Contact List'
    } );

})




app.listen(port, function(err){
    if(err){ console.log('Error running the server', err); }
    
    console.log('Running on port: ', port);


});