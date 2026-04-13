import { Router } from 'express';
import { body } from 'express-validator';
import validate from '../middleware/validate.js';
import verifyToken from '../middleware/auth.js';
import {
  createContact,
  getContacts,
  updateContactStatus,
  deleteContact,
} from '../controllers/contactController.js';

const router = Router();

router.post('/',
  [
    body('phone').notEmpty().withMessage('Phone is required.'),
  ],
  validate,
  createContact
);

router.get('/', verifyToken, getContacts);
router.put('/:id/status', verifyToken, updateContactStatus);
router.delete('/:id', verifyToken, deleteContact);

export default router;
