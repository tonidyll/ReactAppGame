const express = require('express')
const router = express.Router()
const cors = require('cors');
const tamagotchiController = require('../controllers/tamagotchiController')

router.use(cors());

router.post('/', tamagotchiController.create)
router.get('/', tamagotchiController.getAll)

module.exports = router
