import express from 'express';
import { body } from 'express-validator';
import { login, register } from "../controllers/authController.js";
import { getDetails, getUsers } from '../controllers/userController.js';
import { UserRegistrasi } from '../Request/UserRegistrasi.js';

const router = express.Router();


router.post('/users',UserRegistrasi, register)
router.post('/login', login)
router.get('/users', getUsers)
router.get('/users/:id', getDetails)
// router.get('/users', verifyToken, getUsers)
// router.get('/token', refreshToken)
// router.get('/logout', logout)

export default router;