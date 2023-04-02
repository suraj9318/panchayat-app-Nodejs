const express = require('express');
const app =express();
const user = require('./routes/user')
const circular = require('./routes/circular')
const cors = require('cors');
app.use(cors());
const connectDB = require('./db/connection')
require('dotenv').config();
const bodyParser = require('body-parser')
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended : true}))
app.use("/uploads", express.static("uploads"))

// Connection String in env file
// MONGO = mongodb+srv://surajmishra9318:lkprgr1TjSiqd0KM@cluster0.wq1xvor.mongodb.net/Panchayat?retryWrites=true&w=majority

// middleware
app.use(express.json())
// routes
app.use('/api/v1/',user);
app.use('/api/v1/',circular);

const port = 5000;

const start  = async() =>{
    try{
        await connectDB(process.env.MONGO);
        app.listen(port,console.log(`server is listening on port ${port}...`))
    }catch(err){
        console.log(err)
    }
}
start();