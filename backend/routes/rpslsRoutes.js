const express = require('express');
const router = express.Router();
const cors = require('cors');
const rpslsController = require('../controllers/rpslsController');

// Enable CORS
router.use(cors());

router.post('/', rpslsController.create);
router.get('/', rpslsController.getAll);

module.exports = router;
