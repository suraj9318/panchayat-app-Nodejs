const mongoose = require("mongoose")

const CircularSchema = new mongoose.Schema({
    circularNumber: {
        type: Number,
        required : true,
        unique: true
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
        required : true,
    },

})

module.exports = mongoose.model('Circular',CircularSchema) 