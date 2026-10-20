import { Router } from 'express';
import auth from '../middleware/auth.js';
import { login } from '../controllers/authController.js';
import { createMessage, listMessages } from '../controllers/contactController.js';

const router = Router();
router.post('/auth/login', login);
router.post('/contact', createMessage);
router.get('/contact', auth, listMessages); // admin only
export default router;
