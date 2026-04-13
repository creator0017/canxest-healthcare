import { Router } from 'express';
import verifyToken from '../middleware/auth.js';
import { login, logout, getMe, changePassword, getStats } from '../controllers/adminController.js';

const router = Router();

router.post('/login', login);
router.post('/logout', verifyToken, logout);
router.get('/me', verifyToken, getMe);
router.put('/password', verifyToken, changePassword);
router.get('/stats', verifyToken, getStats);

export default router;
