// userRouter.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// User Registration
router.post('/register', userController.register);

// User Login
router.post('/login', userController.login);

// Get Authenticated User Info
router.get('/me', authMiddleware, userController.getMe);

module.exports = router;
