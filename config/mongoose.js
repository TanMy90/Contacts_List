//require the library
const mongo = require('mongoose');

//connect to the database
mongo.connect('mongodb://localhost/contacts_list_db');

//acquire the connection, check if it is successful
const db = mongo.connection;


//error connecting to db
db.on('error', console.error.bind(console, 'error connecting to db'));


//db is running
db.once('open', function(){
    console.log("Successfully connected to database");
});