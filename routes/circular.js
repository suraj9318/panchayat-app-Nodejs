const express = require('express');
const router = express.Router();
const multer = require('multer');
const {addCircular,getCircular, deleteCircular} = require('../controllers/circular')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/circulars')
    },
    fieldSize: 104857600,
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })


router.post("/addCircular", upload.single("file"), addCircular)
router.get("/getCircular", getCircular)
router.delete("/deleteCircular/:_id", deleteCircular)

module.exports = router;