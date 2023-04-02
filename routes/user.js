const express = require('express');
const router = express.Router();
const multer = require('multer');
const {userRegister,userLogin,officialUserLogin} = require('../controllers/user')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/user')
    },
    fieldSize: 104857600,
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage })

router.post('/userRegistration', upload.single("photo"),userRegister)

router.post('/userLogin',userLogin);

router.post('/officialLogin',officialUserLogin)

module.exports = router;