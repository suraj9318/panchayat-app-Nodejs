
const  CitizenUser= require('../models/CitizenUser')
const  OfficialUser= require('../models/OfficialUser')

const userRegister = async(req,res)=>{
    try{
        console.log(req.body);
        var data = new CitizenUser(req.body)
        if (req.file)
            data.photo = req.file.filename
        await data.save()
        res.json({ result: "Done", message: "Record is Created!!!", data: data })
    }catch(err){
        res.status(500).json({msg : err})
    }
}


const userLogin = async(req,res)=>{
    try {
        var data = await CitizenUser.findOne({ mobile: req.body.mobile })
        console.log(data)
        if(data){
            
            if (req.body.password === data.password) {
                res.status(200).json({ result: "success", data: data, message: "Public User Login" })
            }
            else{
                res.status(200).json({ result: "failed", message: "unauthorized User" })
            }
        }
        else{
            res.status(200).json({ result: "failed",  message: "unauthorized User" })
        }
    }
    catch(err){
        res.status(500).json({msg : err})
    }
}



const officialUserLogin = async(req,res)=>{
    try {
        var data = await OfficialUser.findOne({ username: req.body.username })
        if(data){
            if (req.body.password === data.password) {
               
                res.status(200).json({ result: "success", data: data, message: "Official User Login" })
            }
            else{
                res.status(200).json({ result: "failed", message: "unauthorized User" })
            }
        }
        else{
            res.status(200).json({ result: "failed",  message: "unauthorized User" })
        }
    }
    catch(err){
        res.status(500).json({msg : err})
    }
}


module.exports ={
    userRegister,
    userLogin,
    officialUserLogin
}