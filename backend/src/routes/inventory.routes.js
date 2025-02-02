// routes/inventoryRoutes.js
const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.put('/', inventoryController.updateInventory);
router.post('/', inventoryController.addIngredient);

module.exports = router;