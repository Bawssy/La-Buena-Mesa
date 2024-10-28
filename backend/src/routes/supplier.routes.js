// routes/supplierRoutes.js
const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

router.post('/orders', supplierController.generateOrder);
router.put('/orders/:id/approve', supplierController.approveOrder);

module.exports = router;