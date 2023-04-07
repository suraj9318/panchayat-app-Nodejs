
const  Circular = require('../models/Circulars')


const addCircular = async(req,res)=>{
    try{
        var data = new Circular(req.body)
        if (req.file)
            data.file = req.file.filename
        await data.save()
        res.status(201).json({ result: "success", data: data, message: "Circular Added !!!!" })
    }catch(err){
        res.status(500).json({msg : err})
    }
}

const getCircular = async (req, res) => {
    try {
        var data = await Circular.find();
        if(data.length > 0){
            res.status(200).json({ result: "success", data: data})
        }else{
            res.status(200).send({ result: "suceess", message: "No data found" })
        }
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
}

const deleteCircular = async (req, res) => {
    try {
        await Circular.deleteOne({ _id: req.params._id })
        res.status(200).send({ result: "suceess", message: "Record Deleted" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
};


module.exports ={
    addCircular,
    getCircular,
    deleteCircular
}