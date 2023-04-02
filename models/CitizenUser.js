const mongoose = require('mongoose')

const citizenUserSchema = new mongoose.Schema({
    photo:{
        type : String,
        required : true,
    },
    userType:{
        type : String,
        required : true,
    },
    mobile:{
        type : Number,
        required : true,
        min : 10,
    },
    name:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
    },
    password:{
        type : String,
        required : true,
        min : 8,
    },
})

module.exports = mongoose.model('CitizenUser',citizenUserSchema) 