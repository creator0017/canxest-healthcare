import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Admin from '../models/Admin.js';
import Appointment from '../models/Appointment.js';
import Contact from '../models/Contact.js';

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required.' });
    const admin = await Admin.findOne({ email: email.toLowerCase() });
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    const token = signToken(admin._id);
    res.cookie('token', token, cookieOptions);
    res.json({ success: true, admin: { email: admin.email, role: admin.role } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error.' });
  }
};

export const logout = (_req, res) => {
  res.clearCookie('token');
  res.json({ success: true });
};

export const getMe = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select('-password');
    if (!admin) return res.status(404).json({ error: 'Not found.' });
    res.json(admin);
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const admin = await Admin.findById(req.admin.id);
    if (!(await admin.comparePassword(currentPassword))) {
      return res.status(400).json({ error: 'Current password incorrect.' });
    }
    admin.password = newPassword;
    await admin.save();
    res.json({ success: true, message: 'Password updated.' });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
};

export const getStats = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const [totalAppts, pendingAppts, todayAppts, unreadContacts, totalContacts] = await Promise.all([
      Appointment.countDocuments(),
      Appointment.countDocuments({ status: 'pending' }),
      Appointment.countDocuments({ createdAt: { $gte: today, $lt: tomorrow } }),
      Contact.countDocuments({ status: 'unread' }),
      Contact.countDocuments(),
    ]);

    res.json({ totalAppts, pendingAppts, todayAppts, unreadContacts, totalContacts });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
};
