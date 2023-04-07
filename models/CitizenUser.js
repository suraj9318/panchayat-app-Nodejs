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
        validate: {
        validator: function(v) {
            return /^(0|91)?[6-9][0-9]{9}$/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
        },
    },
    name:{
        type : String,
        required : true,
        validate: {
        validator: function(v) {
            return /(.*[a-z]){3}/.test(v);
        },
        message: props => `${props.value} is not a valid name!`
        },
    },
    email:{
        type : String,
        required : true,
        validate: {
        validator: function(v) {
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
        },
        message: props => `${props.value} is not a valid name!`
        },
    },

    password:{
        type : String,
        required : true,
        min : 8,
    },
})

module.exports = mongoose.model('CitizenUser',citizenUserSchema) 