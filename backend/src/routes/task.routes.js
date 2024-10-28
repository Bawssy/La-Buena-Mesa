// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/', taskController.assignTasks);
router.get('/:cookId', taskController.getTasks);

module.exports = router;