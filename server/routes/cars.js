const express = require('express');
const CarController = require('../controllers/CarController');
const router = express.Router();
const controller = new CarController()
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    console.log(`file: `, file)
    const uniqueSuffix = Math.round(Math.random() * 1E9)
    cb(null, `photo-${uniqueSuffix}.${file.mimetype.split('/')[1]}`)
  }
})

const upload = multer({ storage: storage })


/* GET home page. */
router.get('/', controller.getAll);
router.get('/', controller.getCarsById);
router.post('/', upload.single('img'), controller.addCar);

module.exports = router;
