import express from 'express';
const router = express.Router();
// controllers with functions
import { authUser } from '../controllers/userController.js';

router.post('/login', authUser);

export default router;
