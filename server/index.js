import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();

// Security
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'));

// Rate limiting on public booking endpoint
app.use('/api/appointments', rateLimit({ windowMs: 60 * 1000, max: 10, message: { error: 'Too many requests. Try again in a minute.' } }));
app.use('/api/contact', rateLimit({ windowMs: 60 * 1000, max: 10, message: { error: 'Too many requests. Try again in a minute.' } }));

// Health check
app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'Canxest Healthcare API' }));

// Routes
app.use('/api/appointments', appointmentRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminRoutes);

// 404
app.use((_req, res) => res.status(404).json({ error: 'Route not found.' }));

// Connect DB then start server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Canxest Healthcare API running on http://localhost:${PORT}`));
});
