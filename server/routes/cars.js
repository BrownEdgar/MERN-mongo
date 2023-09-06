const express = require('express');
const CarController = require('../controllers/CarController');
const router = express.Router();
const controller = new CarController()
/* GET home page. */
router.get('/', controller.getAll);

module.exports = router;
