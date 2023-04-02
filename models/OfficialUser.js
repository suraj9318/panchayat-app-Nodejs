const mongoose = require('mongoose')

const officialUserSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    username:{
        type : String,
        required : true,
    },
    password:{
        type : String,
        required : true,
    },
    
})

module.exports = mongoose.model('OfficialUser',officialUserSchema) 