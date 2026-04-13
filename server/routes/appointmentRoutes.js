import { Router } from 'express';
import { body } from 'express-validator';
import validate from '../middleware/validate.js';
import verifyToken from '../middleware/auth.js';
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointmentStatus,
  deleteAppointment,
} from '../controllers/appointmentController.js';

const router = Router();

router.post('/',
  [
    body('phone').notEmpty().withMessage('Phone is required.'),
    body('preferredDate').optional(),
    body('date').optional(),
  ],
  validate,
  createAppointment
);

router.get('/', verifyToken, getAppointments);
router.get('/:id', verifyToken, getAppointmentById);
router.put('/:id/status', verifyToken, updateAppointmentStatus);
router.delete('/:id', verifyToken, deleteAppointment);

export default router;
