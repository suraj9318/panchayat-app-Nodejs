const mongoose = require("mongoose")

const CircularSchema = new mongoose.Schema({
    circularNumber: {
        type: Number,
        required : true,
        validate: {
        validator: function(v) {
            return /^.*(?=.{5,}).*$/.test(v);
        },
        message: props => `Please enter at least 5 digit in circular number`
        },
        
    },
    subject: {
        type : String,
        required : true,
    },
    category: {
        type : String,
        required : true,

    },
    language: {
        type : String,
        required : true,

    },
    description: {
        type : String,
        required : true,
        default: ""
    },
    issuedOn: {
        type : String,
        required : true,
    },
    issuedBy: {
        type : String,
        required : true,
    },
    file: {
        type : String,
        required : [true, 'A pdf file is requied'],
    },

})

module.exports = mongoose.model('Circular',CircularSchema) 