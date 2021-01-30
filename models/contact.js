//require mongoose
const mongoose = require('mongoose');

//create contact schema
const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true
    }
});

//create model
const Contact = mongoose.model('Contact', contactSchema);

//export contact model
module.exports = Contact;