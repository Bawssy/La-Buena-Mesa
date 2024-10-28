// routes/dishRoutes.js
const express = require('express');
const router = express.Router();
const dishController = require('../controllers/dishController');

router.post('/', dishController.addDish);
router.put('/:id', dishController.updateDish);
router.delete('/:id', dishController.deleteDish);

module.exports = router;